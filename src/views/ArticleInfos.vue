<template>
    <div class="articleBox">
        <div class="leftArt">
            <div class="art-title">GO语言开发指南</div>
            <div class="art-others">
                <ul>
                    <li><a href="#"><i class="el-icon-user-solid"></i>小禹</a></li>
                    <li><i class="el-icon-date">2020-06-26 11:13</i></li>
                    <li><i class="el-icon-view">共<span>123</span>人围观</i></li>
                </ul>
            </div>
            <div class="art-contnet"></div>
            <div class="art-comment">
                <div class="publish-box">
                    <el-form :model="msgForm" :rules="rules" ref="msgForm" :inline="true"  class="demo-form-inline">
                        <el-form-item label="昵称" prop="nickname">
                            <el-input v-model="msgForm.nickname" name="nickname" placeholder="请输入一个昵称" class="aa" style="margin-left:-5px;"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱" prop="email" class="email_box">
                            <el-input v-model="msgForm.email" name="email" placeholder="请填写邮箱地址"></el-input>
                        </el-form-item>
                        <el-form-item label="请留言" prop="content" class="content_box">
                            <el-input v-model="msgForm.content" name="content" type="textarea" class="bb" placeholder="请填写留言" ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('msgForm')" >提交</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="comment-list">
                    <div class="title_"><span>766</span>条评论</div>
                    <div class="comment-box">
                        <div class="lines">
                            <div class="origin_msg">
                                <div class="user_msg">
                                    <el-col :span="12" style="width:30px;">
                                        <div class="demo-basic--circle">
                                            <div class="block"><el-avatar shape="square" :size="30" :src="squareUrl"></el-avatar></div>
                                        </div>
                                    </el-col>
                                    <span class="username">ethan</span>
                                    <span class="msg-time">18小时前</span>
                                </div>
                                <div class="user_msg_txt">就老爷子那弯腰两手触地，而且是指第二关节触地，同时腿抻直走……就不说走了吧，手触地同时腿抻直都做不来。[捂脸]</div>
                                <div class="options">
                                    <span ><i class="fa fa-thumbs-up" aria-hidden="true"></i>123</span>
                                    <span @click="showReplyText()"><i class="fa fa-reply" aria-hidden="true" ></i>回复</span>
                                    <span><i class="fa fa-trash-o" aria-hidden="true"></i>删除</span>
                                </div>
                                <div class="reply" v-if="showReply">
                                    <el-form :inline="true" :model="replyForm" :rules="replyRules" ref="replyForm"  class="reply_form">
                                        <el-form-item prop="msg">
                                            <el-input type="textarea" v-model="replyForm.msg" name="msg" placeholder="回复ethan"></el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button type="primary" @click="submitMsg('replyForm')">提交</el-button>
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <div class="msg_reply_msg">
                                    <el-col :span="12" style="width:30px;">
                                        <div class="demo-basic--circle">
                                            <div class="block"><el-avatar shape="square" :size="30" :src="squareUrl"></el-avatar></div>
                                        </div>
                                    </el-col>
                                    <div>
                                        <span class="msg_user_name">柏欣然</span>回复<span class="msg_user_name">ethan(作者)</span>
                                        <span class="reply_time">7分钟前</span>
                                    </div>
                                    <div class="reply_msg_box">就老爷子那弯腰两手触地，而且是指第二关节触地，同时腿抻直走……就不说走了吧，手触地同时腿抻直都做不来。就老爷子那弯腰两手触地，而且是指第二关节触地，同时腿抻直走……就不说走了吧，手触地同时腿抻直都做不来。就老爷子那弯腰两手触地，而且是指第二关节触地，同时腿抻直走……就不说走了吧，手触地同时腿抻直都做不来。</div>
                                    <div class="options">
                                        <span ><i class="fa fa-thumbs-up" aria-hidden="true"></i>123</span>
                                        <span @click="showReplyText()"><i class="fa fa-reply" aria-hidden="true" ></i>回复</span>
                                        <span><i class="fa fa-trash-o" aria-hidden="true"></i>删除</span>
                                    </div>
                                    <div class="reply_user" v-if="showReply">
                                        <el-form :inline="true" :model="replyForm" :rules="replyRules" ref="replyForm"  class="reply_user_form">
                                            <el-form-item prop="msg">
                                                <el-input type="textarea" v-model="replyForm.msg" name="msg" placeholder="回复柏欣然"></el-input>
                                            </el-form-item>
                                            <el-form-item>
                                                <el-button type="primary" @click="submitMsg('replyForm')">提交</el-button>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </div>
                                <div class="msg_reply_msg">
                                    <el-col :span="12" style="width:30px;">
                                        <div class="demo-basic--circle">
                                            <div class="block"><el-avatar shape="square" :size="30" :src="squareUrl"></el-avatar></div>
                                        </div>
                                    </el-col>
                                    <div>
                                        <span class="msg_user_name">愤怒的小强</span>回复<span class="msg_user_name">柏欣然</span>
                                        <span class="reply_time">1分钟前</span>
                                    </div>
                                    <div class="reply_msg_box">就老爷子那弯腰两手触地，而且是指第二关节触地，同时腿抻直走……就不说走了吧，手触地同时腿抻直都做不来。就老爷子那弯腰两手触地，而且是指第二关节触地，同时腿抻直走……就不说走了吧，手触地同时腿抻直都做不来。就老爷子那弯腰两手触地，而且是指第二关节触地，同时腿抻直走……就不说走了吧，手触地同时腿抻直都做不来。</div>
                                    <div class="options">
                                        <span ><i class="fa fa-thumbs-up" aria-hidden="true"></i>123</span>
                                        <span @click="showReplyText()"><i class="fa fa-reply" aria-hidden="true" ></i>回复</span>
                                        <span><i class="fa fa-trash-o" aria-hidden="true"></i>删除</span>
                                    </div>
                                    <div class="reply_user" v-if="showReply">
                                        <el-form :inline="true" :model="replyForm" :rules="replyRules" ref="replyForm"  class="reply_user_form">
                                            <el-form-item prop="msg">
                                                <el-input type="textarea" v-model="replyForm.msg" name="msg" placeholder="回复柏欣然"></el-input>
                                            </el-form-item>
                                            <el-form-item>
                                                <el-button type="primary" @click="submitMsg('replyForm')">提交</el-button>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="rightArt">
            <div class="recommand-art">
                <el-divider content-position="left"><i class="fa fa-book" aria-hidden="true"></i> 推荐阅读</el-divider>
                <ul>
                    <li class="">
                        <div class="recommand-art-title"><a href="#">理解设计模式</a></div>
                        <div class="recommand-art-infos">
                            <span class="fl"><i class="el-icon-date"></i>2020-06-26</span>
                            <span class="fr"><i class="el-icon-chat-dot-square">12</i></span>
                            <span class="fr"><i class="el-icon-view">123</i></span>
                        </div>
                    </li>
                    <li>
                        <div class="recommand-art-title"><a href="#">理解设计模式</a></div>
                        <div class="recommand-art-infos">
                            <span class="fl"><i class="el-icon-date"></i>2020-06-26</span>
                            <span class="fr"><i class="el-icon-chat-dot-square">12</i></span>
                            <span class="fr"><i class="el-icon-view">123</i></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'ArticleInfos',
    data (){
        var checkEmail = (rule, value, callback) => {
            const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
            if (!value) {
                return callback(new Error('邮箱不能为空'))
            }
            setTimeout(() => {
                if (mailReg.test(value)) {
                    callback()
                } else {
                    callback(new Error('请输入正确的邮箱格式'))
                }
            }, 100)
        }
        return {
            squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
            msgForm:{
                nickname:"",
                email:"",
                content:"",
            },
            rules:{
                nickname:[
                    {required:true, message: '请输入昵称'},
                    {min:2, max:10, message: '昵称长度在2～10字符'}
                ],
                email:[
                    {required:true, message: '请输入邮箱地址'},
                    { validator: checkEmail }
                ],
                content:[
                    {required:true, message: '请输入评论'},
                    {min:2, max:10, message: '内容长度在2～100字符'}
                ]
            },
            showReply:false,
            replyForm:{
                msg:"",
            },
            replyRules:{
                msg:[
                    {required:true, message: '请输入回复内容'},
                    {min:2, max:200, message: '长度在2～200字符'}
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
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        showReplyText(){
            console.log(this.showReply)
            this.showReply=true
        },
        submitMsg(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style lang="less" scoped>
    .articleBox{
        width: 100%;
        overflow: hidden;
    }
    .leftArt{
        width: 71%;
        float: left;
        overflow: hidden;
        border:1px solid rgb(229,229,229);
        border-radius: 4px;
        box-shadow: 0px 0px 5px 5px rgba(229,229,229,0.9);
        padding:10px;
        margin-left: 10px;
        background-color: white;
    }
    .rightArt{
        width: 20%;
        float: left;
        margin-left: 1%;
        border:1px solid rgb(229,229,229);
        border-radius: 4px;
        box-shadow: 0px 0px 5px 5px rgba(229,229,229,0.9);
        padding: 10px;
        background-color: white;
    }
    .art-title{
        width: 100%;
        overflow: hidden;
        border-bottom:1px solid rgb(229,229,229);
        font-size:18px; 
        line-height: 40px;
        font-weight: bolder;
    }
    .art-others{
        width: 100%;
        height:30px;
    }
    .art-others li{
        float: left;
        line-height: 30px;
        font-size:12px;
        margin-right: 20px;;
    }
    .art-contnet{
        width: 100%;
        min-height: 480px;
        overflow: hidden;
        border-bottom:1px solid rgb(229,229,229);
        margin-bottom: 20px;;
    }
    .art-comment{
        width: 100%;
        min-height: 180px;
        overflow: hidden;
    }
    .publish-box{
        width:98%;
        overflow: hidden;
    }
    /deep/ .bb .el-textarea__inner{
        width:600px !important;
    }
    .recommand-art li{
        margin-bottom: 20px;;
        overflow: hidden;
    }
    .recommand-art-title{
        clear:both;
        font-size:14px;
    }
    .recommand-art-infos{
        widows: 100%;
        margin-top: 10px;
    }
    .recommand-art-infos span{
        font-size: 12px;
        color:#9b9b9b;
        margin-right: 6px;
    }
    .fl{
        float: left;
    }
    .fr{
        float: right;
    }
    .title_{
        width: 100%;
        height:30px;
        background-color: #f5f5f5;
        padding:10px;
        line-height: 30px;
        margin-bottom: 20px;;
    }
    .comment-box{
        width: 99%;
        overflow: hidden;
        min-height: 100px;
        padding:10px 0px;

    }
    .lines{
        width: 100%;
        overflow: hidden;
    }
    .user_msg{
        height: 35px;
        line-height: 35px;
    }
    .username{
        margin-left: 10px;    
    }
    .user_msg_txt{
        overflow: hidden;
        padding:10px;
        font-size:14px;
    }
    .msg-time{
        font-size:12px;
        float:right;
        margin-right: 20px;
        color:#9b9b9b;
    }
    .options{
        padding-left: 40px;;
    }
    .options span{
        font-size:12px;;
        cursor: pointer;
        margin-right: 15px;
        color:#9b9b9b;
    }
    .options span:hover{
        color:black;
    }
    .reply{
        width: 92%;
        height: 70px;
        margin-left: 5%;
        padding:10px 0px;
    }
    .reply_form{
        width: 100%;
        overflow: hidden;
        padding:10px 0px 20px 0px;
    }
    .reply_user{
        width: 100%;
        height: 70px;
        margin-left: 5%;
        padding:10px 0px;
    }
    .reply_user_form{
        width: 100%;
        overflow: hidden;
        padding:10px 0px 20px 0px;
    }
    /deep/ .reply_user_form .el-textarea__inner{
        margin-left: 0px !important;
        width:560px;
    }
    /deep/ .reply_form .el-textarea__inner{
        margin-left: 0px !important;
        width:600px;
    }
    /deep/ .demo-form-inline .el-form-item__error{
        left: 13px !important;
    }
    /deep/ .email_box .el-form-item__error{
        left: 18px !important;
    }
    /deep/ .content_box .el-form-item__error{
        left: 0px !important;
    }
    /deep/ .content_box .el-textarea__inner{
        width: 680px;

    }
    .origin_msg{
        border-bottom: 1px solid rgb(229,229,229);
        padding-bottom: 20px;
    }
    .msg_reply_msg{
        width: 90%;
        margin-left: 5%;
        overflow: hidden;
        padding:10px;
        margin-top: 10px;
        margin-bottom: 10px;
        overflow: hidden;
        line-height: 30px;
        color:#7f899f;
        font-size:14px;
        border-bottom: 1px solid rgb(229,229,229);
    }
    .msg_user_name{
        color:black;
        padding:0px 6px;
    }
    .reply_time{
        text-align: right;
        float: right;
    }
    .reply_msg_box{
        clear: both;
        word-wrap: break-word;
        word-break: normal;
        width: 95%;
        margin-left: 35px;
        line-height: 25px;
        color:black;
        
    }
</style>