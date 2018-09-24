<template>
  <header>
    <el-row>
      <el-col :span="20" :offset="2">
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="18">
            <h2>{{ title }}</h2>
          </el-col>
          <el-col :span="6">
            <el-tooltip class="item" effect="dark" content="It's a broccoli!" placement="top-start">
              <img class="logo" src="../assets/brocoli.png">
            </el-tooltip>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </header>
</template>

<script>
  export default {
    name: 'headerBlock',
    props: {
      title: {
        require: false,
        type: String,
        default: 'Dapp'
      }
    }
  }
</script>

<style scoped>
  header {
    background-color: #fafafa;
    border-bottom: 3px solid #eee;
  }
  .logo {
    width: 45px;
    position: absolute;
    right: 0;
    margin-top: 15px;
  }
</style>
