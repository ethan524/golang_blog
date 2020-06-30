<template>
  <el-container>
    <el-header class="header-box" style="height:50px;">
      <el-row>
        <el-col :span="14" :push="5">
          <div class="header-menu">
              <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                <el-menu-item class="blogName"><a href="/index" class="siteName">小禹</a></el-menu-item>
                <el-menu-item index="2" >首页</el-menu-item>
                <el-menu-item >
                  <el-input v-model="keyword" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
                </el-menu-item>
              </el-menu>
              <div class="line"></div>
          </div>
          <div class="user-box">
            <ul v-if="isLoginShow">
              <li><a href="#">注册</a> </li>
              <li><a href="/login">登陆</a> </li>
            </ul>
            <ul v-if="isUserShow">
              <li>
                <div class="block userHeadImg">
                  <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                      <el-avatar shape="square" :size="30" :src="squareUrl"></el-avatar>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item icon="el-icon-s-home">我的主页</el-dropdown-item>
                      <el-dropdown-item icon="el-icon-setting">设置</el-dropdown-item>
                      <el-dropdown-item icon="el-icon-switch-button">退出</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </li>
              <li class="user-msg-li">
                <i class="el-icon-s-comment"></i>
              </li>
              <li><i class="el-icon-message-solid"></i></li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="14" :push="5">
          <div class="main-content"><router-view/></div>
        </el-col>
      </el-row>
    </el-main>
    
  </el-container>
  
</template>


<script>
export default {
  name: 'Home',
  data(){
    return {
      activeIndex:'2',
      keyword:"",
      isLoginShow:true,
      isUserShow:false,
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    }
  },
}
</script>

<style lang="less" scoped>
  .blogName{
    font-size:20px;
    font-weight: bolder;
  }
  .siteName{
    color:black;
    display: inline-block;
    margin-top:-8px;
  }
  .siteName:link,.siteName:hover,.siteName:active,.siteName:visited{ color:black}


  .header-box{
    height:50px;
    width: 100%;
    border-bottom:1px solid rgb(229,229,229);
    padding:0px;
    background-color: white;
    box-shadow: 0px 5px 5px rgba(229,229,229,0.9);
  }
  .header-menu{
    margin: 0px;
    width:78%;
    height:50px;
    float: left;
  }
  .user-box{
    width: 20%;
    height: 50px;
    float: left;
    padding:0px;
    margin-left: 8px;
  }
  .user-box li{
    float: right;
    height: 50px;
    line-height: 50px;
    padding:0px 10px;
  }
  .user-box li a{
    color:black;
    text-decoration: none;
    font-size: 14px;
  }
  .userHeadImg{
    margin-top: 8px;
    cursor: pointer;
  }
  .user-box i{
    cursor: pointer;
    font-size: 20px;
  }
  
  .main-content{
    width: 100%;
    min-height: 580px;
    padding: 10px;
    margin-top:-20px;
  }
  .el-menu-demo{
    height:49px;
  }
  .line{
    margin-top:-10px;
  }
  .el-submenu__titl{
    height: 50px;
  }
  .el-menu--horizontal>.el-menu-item{
    height: 60px;
    line-height: 60px;
  }
  .el-menu--horizontal > .el-menu-item[data-v-fae5bece]{
    height:50px;
    line-height: 50px;
  }
  /deep/ .el-input__inner{
    height: 32px;
    line-height: 32px;
    width:300px;
    margin-left: 20px;
    background-color: rgb(#f5f5f5);
  }
  .el-dropdown-menu{
    top:34px !important;
  }

</style>
