<template>
  <div id="app" class="app">
    <router-view/>
    <el-backtop target=".app" ><i class="el-icon-caret-top"></i></el-backtop>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
html,body,#app{
  width:100%;
  margin:0;
  padding:0;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  background-color: #f5f5f5;
}
#app{
  padding:0;
  margin:0;
}
ul,li{ padding:0;margin:0;list-style:none}
.app{
  height: 100vh;
  overflow-x:hidden;
}
a{
  color:black;
  text-decoration: none;
}

</style>
