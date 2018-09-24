<template>
  <div class="header-table-filter">
    <el-row type="flex" justify="end" class="mt-2">
      <el-col :span="14">
        <h3 class="m-0">Users</h3>
      </el-col>
      <el-col :span="10">
        <el-input
          v-model="searchTerm"
          id="filter"
          clearable
          placeholder="Filter by name"
          prefix-icon="el-icon-search"
          @input="filterUsers">
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'UsersTableFilter',
    data () {
      return {
        searchTerm: ''
      }
    },
    props: {
      users: {
        required: true,
        type: Array
      }
    },
    methods: {
      filterSearch (searchTerm, items) {
        const data = items.filter(f => (f.name || '').toLowerCase().includes((searchTerm || '').toLowerCase()))
        this.$emit('filterByName', data)
      },
      filterUsers () {
        this.filterSearch(this.searchTerm, this.users)
      }
    }
  }
</script>

<style scoped>
  .mt-2 {
    margin-top: 20px;
  }
  .mb-2 {
    margin-bottom: 20px;
  }
  .m-0 {
    margin-top: 0;
    margin-bottom: 0;
  }

  .header-table-filter {
    padding-bottom: 10px;
    border-bottom: 1px solid #dcdfe6
  }
</style>
