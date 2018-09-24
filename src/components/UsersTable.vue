<template>
  <div class="users-table">
    <el-table :data="users" :stripe="users.length > 2">
      <el-table-column prop="id" label="Id" sortable></el-table-column>
      <el-table-column prop="name" label="Name" sortable></el-table-column>
      <el-table-column prop="points" label="Points" sortable>
        <template slot-scope="scope">
          <span class="mr-1">{{ scope.row.points }}</span>
          <el-button type="primary" plain icon="el-icon-plus" size="mini" @click="addPoints(scope.row.id)"></el-button>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <div class="d-flex end">
            <el-button type="danger" plain icon="el-icon-delete" size="mini" @click="deleteUser(scope.row.id)"></el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        filter: ''
      }
    },
    props: {
      users: {
        required: true,
        type: Array
      }
    },
    methods: {
      deleteUser (id) {
        this.$emit('deleteUser', Number(id))
      },
      addPoints (id) {
        this.$emit('addPoints', Number(id))
      }
    }
  }
</script>

<style>
  .users-table .d-flex {
    display: flex;
  }
  .users-table .d-flex.end {
    justify-content: flex-end;
  }

  .users-table .mr-1 {
    width: 30px;
    display: inline-block;
    margin-right: 10px;
  }
</style>
