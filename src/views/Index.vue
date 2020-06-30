<template>
    <div class="main">
        <div class="leftContent">
            <div class="contentTypeTab">
                <ul>
                    <li class="liActive">推荐</li>
                    <li>关注</li>
                </ul>
            </div>
            <div class="contentLines">
                <div class="lines" v-for="(item, index) in lines" :key="index">
                    <div class="lineLeft">
                        <div class="content-title"><a href="/article-infos">不仅韩国的“N号房”，国内"清蒸赵丽颖吧"同样令人...</a></div>
                        <div class="content-text">
                            除了新冠疫情，这几天“韩国N号房”事件也刷屏了。用一段话来总结，是这样的：韩国多名男子，利用盗号等网络手段，骗取了大量未成年少女的信息，然后对这些女孩进行各种手段的凌辱，包括在身体上用小刀刻“奴隶”字样...
                        </div>
                        <div class="content-others">
                            <ul>
                                <li class="content-li"><a href="#"><i class="el-icon-user-solid"></i><span>ethan</span></a></li>
                                <li class="content-li"><a href="#"><i class="el-icon-chat-square"></i><span>67</span></a></li>
                                <li class="content-li"><i class="fa fa-heart" aria-hidden="true"></i><span>78</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="lineRight">
                        <div class="content-img">
                            <a href="#">
                                <el-image>
                                    <div slot="error" class="image-slot">
                                        <i class="el-icon-picture-outline"></i>
                                    </div>
                                </el-image>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="rightContent">
            <div class="userinfos">
                <el-divider content-position="left"><i class="fa fa-id-card" aria-hidden="true"></i> 我的名片</el-divider>
                <ul>
                    <li class="userinfos-li"><span class="span-title">网 名</span> - <span class="span-intro">小禹</span></li>
                    <li class="userinfos-li"><span class="span-title">职 业</span> - <span class="span-intro">PHP、Golang工程师</span></li>
                    <li class="userinfos-li"><span class="span-title">生 活</span> - <span class="span-intro">北京</span></li>
                    <li class="userinfos-li"><span class="span-title">邮 箱</span> - <span class="span-intro">ethan524@163.com</span></li>
                    <li class="userinfos-li"><span class="span-title">简 介</span> - <span class="span-intro">爱撸铁的程序猿</span></li>
                </ul>
            </div>
            <div class="recommend">
                <el-divider content-position="left"><i class="fa fa-file" aria-hidden="true"></i> 随机推荐</el-divider>
                <ul>
                    <li class="artilce-li" v-for="(item, index) in lines" :key="index"><i class="fa fa-file-code-o" aria-hidden="true"></i><a href="#" class="article-title">如何提高逻辑思维的能力？</a></li>
                </ul>
            </div>
            <div class="tags">
                <div class="tagsBox">
                    <el-divider content-position="left"><i class="fa fa-tags" aria-hidden="true"></i> 标签云</el-divider>
                    <div class="tag">
                        <a href="#"><el-tag size="mini" class="tag-name">php</el-tag></a>
                        <a href="#"><el-tag size="mini" class="tag-name">golang</el-tag></a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Index",
    data(){
        return{
            lines:[1,2,3,4,5,6,7,8,9,10]
        }
    }
}
</script>

<style lang="less" scoped>
    .main{
        width: 100%;
        overflow: hidden;
    }
    .leftContent{
        float: left;
        width: 65%;
        margin-right: 1%;
        background-color: white;
        overflow: hidden;
    }
    .contentTypeTab{
        width:100%;
        height:40px;
        border-bottom:1px solid rgb(229,229,229);
        padding:0px 10px;
        padding-bottom: 5px;;
        margin-top: 10px;
    }
    .contentTypeTab li{
        float: left;
        height: 40px;
        line-height: 40px;
        margin-right: 30px;
        margin-left: 10px;
        cursor: pointer;
    }
    .liActive{
        color:rgb(#1575f9)
    }
    .lines{
        width: 100%;
        max-height: 200px;
        min-height: 120px;
        padding:20px 5px 40px 20px;
        border-bottom: 1px solid rgb(229,229,229);
    }
    .content-title a{
        text-decoration: none;
        color:black;
        font-size: 18px;
        font-weight: 400;
    }
    .content-title a:hover{
        color:#3f649c;
    }
    .lineLeft{
        width: 66%;
        float: left;
        overflow: hidden;
        margin-right: 4%;
    }
    .content-text{
        font-size:12px;
        margin-top: 10px;
        line-height: 24px;
        color:#949494;
    }
    .content-others{
        width: 98%;
        height: 35px;
        line-height: 35px;
    }
    .content-others li{
        float: left;
        margin-right: 20px;;
        font-size:14px;
        color:#949494;
    }
    .content-others li a{
        text-decoration: none;
        color:#949494;
    }
    .lineRight{
        width: 25%;
        float: left;
        overflow: hidden;
        padding-top:20px;
    }
    .content-img{
        width: 96%;
        height:90px;
        border:1px solid rgb(229,229,229);
        border-radius: 4px;;
        text-align: center;
        vertical-align: middle;
        line-height: 90px;
    }

    .rightContent{
        float: left;
        background-color: white;    
        width: 30%;
        overflow: hidden;
        padding:10px 0px;
    }
    .userinfos{
        width:90%;
        overflow: hidden;
        margin-left: 4%;
        border:1px solid rgb(229,229,229);
        border-radius: 4px;
        padding-bottom: 15px;
    }
    .userinfos-li{
        margin-left: 20px;;
    }
    .span-title{
        display: inline-block;
        width: 40px;
        height: 28px;
        line-height: 28px;
        font-size:14px;
    }
    .span-intro{
        display: inline-block;
        width: 150px;
        height: 28px;
        line-height: 28px;
        font-size:14px;
        margin-left: 10px;
    }
    .recommend{
        width:90%;
        overflow: hidden;
        margin-left: 4%;
        border:1px solid rgb(229,229,229);
        border-radius: 4px;
        padding-bottom: 15px;
        margin-top:10px;
    }
    .tags{
        width: 98%;
        overflow: hidden;
        min-height: 100px;
        padding:10px;
        padding-left: 14px;
    }
    .tagsBox{
        width: 92%;
        overflow: hidden;
        border:1px solid rgb(229,229,229);
        border-radius: 4px;
        min-height: 100px;
    }
    .tag{
        width: 90%;
        height: 100px;
        margin-left: 10px;
    }
    .tag-name{
        margin: 6px 6px 6px 0px;
    }
    .artilce-li{
        font-size:14px;
        margin-left: 20px;
        height:30px;
    }
    .article-list{
        display: inline;
        padding:2px 7px;
        border:1px solid red;
        border-radius: 4px;
    }
    .article-title{
        margin-left: 10px;
        cursor: pointer;
        color:black;
        text-decoration: none;
        font-size:12px;
    }
</style>