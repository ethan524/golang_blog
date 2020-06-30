<template>
    <div class="loginBox">
        <div class="alter-box" v-if="showErr">
            <el-alert title="" type="error">{{errorText}}</el-alert>
        </div>
        <div class="title-box">
            <a href="/login" class="isActive">登陆</a>
            <span class="circle"></span>
            <a href="#">注册</a>
        </div>
        <div class="form-box">
            <el-row>
                <el-col :span="16" :push="4">
                    <el-form ref="form" :model="form" :rules="formRules">
                        <el-form-item label="" prop="email">
                            <el-input placeholder="请输入邮箱" v-model="form.email"> <i slot="prefix" class="el-input__icon el-icon-user-solid"></i> </el-input>
                        </el-form-item>
                        <el-form-item label="" prop="password">
                            <el-input placeholder="请输入密码" v-model="form.password"> <i slot="prefix" class="el-input__icon fa fa-lock" aria-hidden="true"></i></el-input>
                        </el-form-item>
                        <el-form-item label="">
                            <el-button type="primary" @click="submitForm('form')">登陆</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            
        </div>
    </div>
</template>
<script>
export default {
    name:'Login',
    data (){
        return {
            showErr:false,
            errorText:"",
            form:{
                email:"",
                password:"",
            },
            formRules:{
                email:[
                    {required:true, message: '请输入邮箱', trigger: 'blur'},
                ],
                password:[
                    {required:true, message: '请输入密码', trigger: 'blur'},
                ]
            }
        }
    },
    methods:{
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    this.showErr = true
                    this.errorText = "邮箱或密码输入有误"
                    return false;
                }
            });
        }
    }
}
</script>

<style lang="less" scoped>
    .loginBox{
        width: 420px;
        height:350px;
        margin: 100px auto;
        border:1px solid rgb(229,229,229);
        border-radius: 4px;
        box-shadow: 0px 0px 5px 5px rgba(229,229,229,0.9);
        background-color: white;
        position: absolute;left:50%;top:50%; 
        margin-left:-200px;margin-top:-300px;
    }
    .alter-box{
        width: 100%;
        overflow: hidden;
        text-align: center;
    }
    .title-box{
        width: 100%;
        height:35px;
        line-height: 35px;
        text-align: center;
        margin-top: 40px;
    }
    .circle{
        display: inline-block;
        padding: 1px;
        border:1px solid gray;
        background-color: gray;
        border-radius: 20px;
        margin-bottom: 3px;
        margin-left: 10px;
        margin-right: 10px;;
    }
    .title-box a{
        display:inline-block;
        padding:0px 10px 2px 10px;
        font-size:18px;
        color:#8b8b8b;
    }
    .isActive{
        color:#ea6555 !important;
        border-bottom: 2px solid #ea6555;
        font-weight: bold;
    }
    .form-box{
        margin-top: 40px;
    }
    /deep/ .el-input__inner{
        background-color: #f7f7f7 !important;
    }
    /deep/ .el-button{
        padding:12px 120px !important;
    }
    /deep/ .el-button span{
        font-size:20px;
    }
</style>