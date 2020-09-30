<template>
  <div class="user">
    <div class="user_list" v-if="zhanghao=='admin'">
      <div class="head">信息</div>
      <ul v-if="item.name!=zhanghao" v-for="item in data_2">
        <li>
          <div class="id">{{item.id}}</div>
          <div class="name">{{item.name}}</div>
          <div class="phone">{{item.phone}}</div>
          <div class="email">{{item.email}}</div>
          <span>
            <p @click="see(item.name)">查看</p>
            <p @click="dele(item.id)">删除</p>
          </span>
        </li>
      </ul>
      
      <div class="bottom">
        <div class="add" @click="add">添加</div>
        <div class="back" @click="back">返回</div>
      </div>
    </div>
    <div class="user_list" v-else>
      <div class="head">信息</div>
      <ul v-if="item.name==zhanghao" v-for="item in data_2">
        <li>
          <div class="id">{{item.id}}</div>
          <div class="name">{{item.name}}</div>
          <div class="phone">{{item.phone}}</div>
          <div class="email">{{item.email}}</div>
          <span>
            <p @click="see(item.name)">查看</p>
            <p disable:true>删除</p>
          </span>
        </li>
      </ul>
      <div class="bottom">
        <div class="back" @click="back">返回</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data:function(){
    return{
      zhanghao:localStorage.zhanghao,
      data_2:{}
    }
  },
  created:function(){
    this.initdata();
  },
  methods:{
    initdata:function(){
      var that=this;
      if(this.$route.params.pr_user){
        localStorage.zhanghao=this.$route.params.pr_user;
        that.zhanghao=localStorage.zhanghao;
      }
      if(this.$route.params.nochange){
        localStorage.nochange=this.$route.params.nochange;
      }
      axios.get("http://localhost:3000/user").then(function(result){
        that.data_2=result.data;
      });
      if(localStorage.zhanghao==''){
        alert('请登录！');
      }
    },
    see:function(val){
      this.$router.push({name:'Message',params:{
              name_u:val,
              nochange:localStorage.nochange,
              act:'1'
            }});
    },
    back:function(){
      this.$router.push({name:'Home'});
    },
    add:function(){
      this.$router.push({name:'Message',params:{
              nochange:localStorage.nochange,
              act:'2'
            }});
    },
    dele:function(val){
      let that=this;
      axios.delete('http://localhost:3000/user/'+val).then(function(){
        axios.get("http://localhost:3000/user").then(function(result){
        that.data_2=result.data;
      });
      });
    }
  }
}
</script>>
<style lang="scss">
  .user{
    overflow: hidden;
    .user_list{
      position: relative;
      height: 400px;
      width: 600px;
      margin: 200px auto;
      border: 1px solid red;
     
      .head{
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 16px;
        font-weight: 700;
        border-bottom: 1px solid red;
      }
      ul{
        width: 100%;
        height: 40px;
        border-bottom: 1px solid rgb(243, 62, 62);
        margin-top: 10px;
        li{
          width: 100%;
          height: 100%;
          position: relative;
          list-style: none;
          div{
            float: left;
            height: 40px;
            border-top:1px solid red;
            border-right:1px solid red ;
            line-height: 40px;
            text-align: center;
            font-size: 12px;
          }
          .id{
            width: 10%;
          }
          .name{
            width: 15%;
          }
          .phone{
            width: 25%;
          }
          .email{
            width: 32%;
          }
          span{
            height: 39px;
            position: absolute;
            right: 0;
            bottom: 0px;
            text-align: center;
            line-height: 40px;
            border-top: 1px solid red;
            p{
              float: left;
              margin: 0 10px;
              cursor: pointer;
              &:hover{
                color: red;
              }
            }
          }

        }
      }
      .bottom{
        position: absolute;
        bottom: 0;
        width: 100%;
        div{
          position: absolute;
          bottom: 10px;
          cursor: pointer;
        }
        .add{
          left: 50%;
          transform: translateX(-50%);
          border: 1px solid red;
        }
        .back{
          right: 10px;
          border: 1px solid red;

        }
      }
    }
  }
</style>