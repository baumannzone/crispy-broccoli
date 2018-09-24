<template>
  <div id="app">
    <headerBlock title="Crispy Broccoli Dapp"></headerBlock>
    <el-row>
      <el-col :span="20" :offset="2">
        <router-view></router-view>
      </el-col>
    </el-row>
    <footerBlock></footerBlock>
  </div>
</template>

<script>
import headerBlock from './components/HeaderBlock.vue'
import footerBlock from './components/FooterBlock.vue'
export default {
  name: 'app',
  components: {
    headerBlock,
    footerBlock
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-bottom: 100px;
}
</style>
