<template>
  <div class="users">
    <el-row type="flex" justify="end" class="mt-1">
      <el-col :span="12">
        <el-row type="flex" justify="end">
          <el-button type="primary" @click="openModal">Create User</el-button>
        </el-row>
      </el-col>
    </el-row>
    <usersTableFilter @filterByName="filterByName" :users="users"/>
    <usersTable :users="filteredUsers" @addPoints="addPoints" @deleteUser="deleteUser"/>
    <usersButtons @resetGame="resetGame" @resetPoints="resetPoints" v-show="hasUsers"/>
    <el-dialog title="New user" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Points">
          <el-input-number v-model="form.points" :min="0"></el-input-number>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addUser">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import usuarios from '@/js/users'
  import usersTable from './UsersTable.vue'
  import usersTableFilter from './UsersTableFilter.vue'
  import usersButtons from './UsersButtons.vue'

  export default {
    beforeCreate () {
      usuarios.init()
        .then(() => {
          this.getUsers()
        })
        .catch(err => {
          console.log(err)
        })
    },
    components: {
      usersTable,
      usersTableFilter,
      usersButtons
    },
    data () {
      return {
        users: [],
        form: {
          name: '',
          points: 0
        },
        filteredUsers: [],
        dialogVisible: false
      }
    },
    computed: {
      hasUsers () {
        return this.filteredUsers.length > 0
      }
    },
    methods: {
      getUsers () {
        usuarios.getUsers()
          .then((items) => {
            this.users = []
            const arrayId = items[0]
            const arrayName = items[1]
            const arrayPoints = items[2]
            this.users = arrayName
              .map((f, i) => {
                const condition = window.web3._extend.utils.toDecimal(f) !== 0
                if (condition) {
                  return {
                    id: arrayId[i].toString(),
                    name: window.web3._extend.utils.toUtf8(arrayName[i]),
                    points: arrayPoints[i].toString()
                  }
                }
                return false
              })
              .filter(Boolean)
            this.filteredUsers = [...this.users]
          })
          .catch((err) => {
            console.log('GET USER KO')
            console.log(err)
          })
      },
      filterByName (data) {
        this.filteredUsers = data
      },
      addUser () {
        const name = this.form.name
        const points = this.form.points
        if (name && points !== '') {
          usuarios.addUser(name, points)
            .then((res) => {
              this.handleClose()
              this.$message({ message: 'User created 👌', type: 'success' })
              console.log('ADD USER OK')
              this.getUsers()
            })
            .catch((err) => {
              this.$message({ message: 'Error 😰', type: 'error' })
              console.log('ADD USER KO')
              console.log(err)
            })
        } else {
          console.log('FORM invalid')
        }
      },
      addPoints (id) {
        usuarios.plusFive(id)
          .then((res) => {
            this.$message({ message: 'Points updated 👌', type: 'success' })
            this.getUsers()
          })
          .catch((err) => {
            this.$message({ message: 'Error 😰', type: 'error' })
            console.log(err)
          })
      },
      deleteUser (id) {
        usuarios.deleteUser(id)
          .then((res) => {
            this.$message({ message: 'User deleted 👌', type: 'success' })
            this.getUsers()
          })
          .catch((err) => {
            this.$message({ message: 'Error 😰', type: 'error' })
            console.log(err)
          })
      },
      openModal () {
        this.dialogVisible = true
      },
      handleClose () {
        this.dialogVisible = false
        this.form.name = ''
        this.form.points = 0
      },
      resetGame () {
        usuarios.resetGame()
          .then((res) => {
            this.$message({ message: 'Game reseted 👌', type: 'success' })
            this.getUsers()
          })
          .catch((err) => {
            this.$message({ message: 'Error 😰', type: 'error' })
            console.log(err)
          })
      },
      resetPoints () {
        usuarios.resetPoints()
          .then((res) => {
            this.$message({ message: 'Points restarted 👌', type: 'success' })
            this.getUsers()
          })
          .catch((err) => {
            this.$message({ message: 'Error 😰', type: 'error' })
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped>
  .mt-1 {
    margin-top: 10px;
  }
</style>
