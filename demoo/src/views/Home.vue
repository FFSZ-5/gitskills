<template>
  <div class="home">
    <div class="sign_in">
      <div class="head">
        登录
      </div>
      <input type="text" placeholder="username" v-model="username" @blur="check1" oninput="value=value.replace(' ','') ">
      <span class="unfind" :class="{unfind:isUnfind,unshow:isUnshow}">unfind!!</span>
      <input type="password" placeholder="password" v-model="password" @focus="isWshow=true" @keyup.enter="clic" oninput="value=value.replace(' ','') ">
      <span class="wpassword" :class="{wpassword:isWp,unshow:isWshow}">password eror!!</span>
      <button  @click='clic' :disabled='able' >sign in</button>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
var data


import axios from 'axios'

var name_flag=false;
export default {
  name: 'Home',
  data:function(){
    return{
      username:'',
      password:'',
      isUnshow:true,
      isUnfind:true,
      isWshow:true,
      isWp:true,
      able:false,
      user_data:{}
    }
  },
  created:function(){
    this.initdata();
  },
  methods:{
     initdata:function(){
      var that=this;
      localStorage.zhanghao='';
      localStorage.act='';
      axios.get("http://localhost:3000/user").then(function(result){
        that.user_data=result.data;
      });
    },
    check1(){
      for(var i in this.user_data){
        if(this.user_data[i].name==this.username){
          name_flag=true;
        }
      }
      if(!name_flag){
          this.isUnshow=false;
          name_flag=false
          this.able=true
        }else{
          this.isUnshow=true;
          name_flag=false;
          this.able=false;
        }
    },
    clic:function(){
      // let that4=this;
      for(var i in this.user_data){
        if(this.user_data[i].name==this.username){
          if(this.user_data[i].password==this.password){
            
            this.$router.push({name:'User',params:{
              pr_user:this.username,
              nochange:this.username
            }});
            
          }
          else{
            this.isWshow=false;
          }
        }
      }
    }

    
    
  }
}

</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.home{
  overflow: hidden;
  .sign_in{
    position: relative;
    width: 400px;
    height: 400px;
    margin: 200px auto;
    border: 1px solid brown;
    background-color: blanchedalmond;
    .head{
      width: 100%;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
      font-weight: 700;
      border-bottom: 1px solid black;
    }
    input[type='text']{
      display: block;
      height: 80px;
      width: 200px;
      margin: 30px auto;
      border: none;
      outline: none;
      border-bottom: 1px solid #333;
      text-align: center;
      font-size: 16px;
      background-color: blanchedalmond;
    }
    .unfind{
      position: absolute;
      color: brown;
      left: 50%;
      top:172px;
      transform: translateX(-50%);
    }
    .wpassword{
      position: absolute;
      color: brown;
      left: 50%;
      top:275px;
      transform: translateX(-50%);
    }
    .unshow{
      display: none;
    }
    input[type='password']{
      display: block;
      height: 80px;
      width: 200px;
      margin: 30px auto;
      border: none;
      outline: none;
      border-bottom: 1px solid #333;
      text-align: center;
      font-size: 16px;
      background-color: blanchedalmond;
    }
    button{
      display: block;
      border: none;
      outline: none;
      cursor: pointer;
      margin: 0px auto;
      height: 30px;
      width: 220px;
    }
  }
}
  
</style>