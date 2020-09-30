<template>
  <div class="about">
     <form v-if="act=='1'">
      <div class="head">
        message
      </div>
      <div class="im">
        <img :src="gp" alt="0">
      </div>
      <div class="id">
         <span>id:</span>
         <input type="text" v-model="id" oninput="value=value.replace(/[^\d]/g,'') " :class="{wrong:isW1}" placeholder="输入新id" disabled=true>
      </div>
      <div class="name">
        <span>name:</span>
        <input type="text" v-model="name" oninput="value=value.replace(' ','') " :class="{wrong:isW5}" @blur="name_check2" placeholder="输入新名字" ref="inputs">
      </div>
      <div class="sex">
        <span>sex:</span>
        <p class="male">male</p>
        <input type="radio" name="sex" value="male" v-model="gender" >
        <p class="female">female</p>
       <input type="radio" name="sex" value="female" v-model="gender">
      </div>
      <div class="phone">
        <span>phone:</span>
        <input type="text" v-model="phone" oninput="value=value.replace(/[^\d]/g,'') " :class="{wrong:isW2}" @blur="phone_check" placeholder="输入新电话号" >
      </div>
      <div class="email">
        <span>email:</span>
        <input type="text" v-model="email" :class="{wrong:isW3}" @blur="e_check" oninput="value=value.replace(' ','') " placeholder="输入新邮箱">
      </div>
      <div class="password">
        <span>password:</span>
        <input type="text" v-model="password" :class="{wrong:isW4}" @blur="pw_check" oninput="value=value.replace(' ','') " placeholder="输入新六位密码">
      </div>
      <div class="introduce">
        <span>introduce:</span>
        <textarea name="123" id="" cols="30" rows="10" v-model="intr"></textarea>
      </div>
      <div class="pic">
       <span>picture:</span>
        <input type="file" name="" id="" @change="tirggerFile($event)">
      </div>
      <a @click="sub" class="backs">backsubmit</a>
    </form>
    <form v-if="act==2">
      <div class="head">
        message
      </div>
      <div class="im">
        <img :src='gp' alt="0">
      </div>
      <div class="id">
         <span>id:</span>
         <input type="text" v-model="id" oninput="value=value.replace(/[^\d]/g,'') " :class="{wrong:isW1}" @blur="id_check" placeholder="输入新id">
      </div>
      <div class="name">
        <span>name:</span>
        <input type="text" v-model="name" oninput="value=value.replace(' ','') " :class="{wrong:isW5}" @blur="name_check" placeholder="输入新名字" ref="inputs">
      </div>
      <div class="sex">
        <span>sex:</span>
        <p class="male">male</p>
        <input type="radio" name="sex" value="male" v-model="gender" >
        <p class="female">female</p>
       <input type="radio" name="sex" value="female" v-model="gender">
      </div>
      <div class="phone">
        <span>phone:</span>
        <input type="text" v-model="phone" oninput="value=value.replace(/[^\d]/g,'') " :class="{wrong:isW2}" @blur="phone_check" placeholder="输入新电话号">
      </div>
      <div class="email">
        <span>email:</span>
        <input type="text" v-model="email" :class="{wrong:isW3}" @blur="e_check" oninput="value=value.replace(' ','') " placeholder="输入新邮箱">
      </div>
      <div class="password">
        <span>password:</span>
        <input type="text" v-model="password" :class="{wrong:isW4}" @blur="pw_check" oninput="value=value.replace(' ','') " placeholder="输入新六位密码">
      </div>
      <div class="introduce">
        <span>introduce:</span>
        <textarea name="123" id="" cols="30" rows="10" v-model="intr"></textarea>
      </div>
      <div class="pic">
       <span>picture:</span>
        <input type="file" name="" id="" @change="tirggerFile($event)">
      </div>
      <a @click="sub" class="backs">submit</a>
      <a @click="b2" class="ba">back</a>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data:function(){
    return{
      id:'',
      name:'',
      gender:'male',
      phone:'',
      email:'',
      password:'',
      intr:'',
      pic:'',
      isW1:false,
      isW2:false,
      isW3:false,
      isW4:false,
      isW5:false,
      bu:false,
      zhanghao:'',
      act:'',
      data_2:{}
    }
  },
  created:function(){
    this.initdata();
    this.changfouce();
  },
  methods:{
    changfouce(){
    this.$nextTick((x)=>{   //正确写法
       this.$refs.inputs.focus();
      })
    },
    initdata:function(){
      var that=this;
      if(this.$route.params.act){
        localStorage.act=this.$route.params.act;
        that.act=localStorage.act;
        if(localStorage.act==1){
        localStorage.zhanghao=this.$route.params.name_u;
        that.zhanghao=localStorage.zhanghao;
        }
      }else{
        that.act=localStorage.act;
        if(localStorage.act==1){
        that.zhanghao=localStorage.zhanghao;
        }
      }
      if(localStorage.act==1){
        axios.get("http://localhost:3000/user").then(function(result){
        for(var i in result.data){
          if(result.data[i].name==localStorage.zhanghao){
            that.data_2=result.data[i];
          }
        }
        that.id=that.data_2.id;
        that.name=that.data_2.name;
        that.phone=that.data_2.phone;
        that.email=that.data_2.email;
        that.password=that.data_2.password;
        that.intr=that.data_2.intr;
        that.gender=that.data_2.gender;
        that.pic=that.data_2.pic;
      });
      }
      
    },
    sub:function(){
      var y=this;
      if(this.act==2){
        var new_one={
        id:this.id,
        name:this.name,
        gender:this.gender,
        phone:this.phone,
        email:this.email,
        password:this.password,
        intr:this.intr,
        pic:this.pic
      }
      if(this.bu){
        if(!(this.isW1||this.isW2||this.isW3||this.isW4||this.isW5||!(this.pic))){
          axios.post('http://localhost:3000/user',new_one).then(function(){
              y.$router.push({name:'User',params:{
              pr_user:'admin'
            }});
            });;
        }else{
           alert('请完成表单！')
        }
      }else{
        alert('请完成表单！')
      }
      }
      if(this.act==1){
        if(this.bu){
          if(!(this.isW1||this.isW2||this.isW3||this.isW4||this.isW5||(!this.pic))){
            let updateMsg={};
            updateMsg.id=this.id;
            updateMsg.name=this.name;
            updateMsg.gender=this.gender;
            updateMsg.phone=this.phone;
            updateMsg.email=this.email;
            updateMsg.password=this.password;
            updateMsg.intr=this.intr;
            updateMsg.pic=this.pic;
            axios.patch('http://localhost:3000/user/'+updateMsg.id,updateMsg,{
              Headers:{"Content-Type":'application/json' }
            }).then(function(){
              if(localStorage.nochange=='admin'){
                y.$router.push({name:'User',params:{
                pr_user:'admin'
            }});
              }else{y.$router.push({name:'User',params:{
              pr_user:y.name
            }});}
              
            });
            
          }else{
           alert('请完成表单！')
          }
        }else{
          alert('请完成表单！')
        }
        
      }
    },
    tirggerFile:function(event){
      var file = event.target.files;
      this.pic=file[0].name;
    },
    id_check:function(){
      let that3=this;
      axios.get('http://localhost:3000/user').then(function(data){
        for(var i in data.data){
          if(data.data[i].id==that3.id){
            that3.isW1=true;
            break;
          }else{
            if(that3.id==''){
              that3.isW1=true
            }else{
              that3.isW1=false;
            }
          }
        }
      that3.bu=true;
        // if(that3.isW1==true){
        //   if(that3.id==''){
        //     alert('id不能为空')
        //   }else{
        //     alert('id已存在')
        //   }
        // }
      });
    },
    phone_check:function(){
      var mPattern = /^1[34578]\d{9}$/;
      if(!mPattern.test(this.phone)){
        this.isW2=true;
            // alert('请输入正确的电话号码')
      }else{
        this.isW2=false;
      }
      this.bu=true;
    },
    e_check:function(){
      var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if(!ePattern.test(this.email)){
        this.isW3=true;
            // alert('请输入正确格式的邮箱')
      }else{
        this.isW3=false;
      }
      this.bu=true;
    },
    pw_check:function(){
      if(this.password.length<6){
        this.isW4=true;
            // alert('密码至少要六位')
      }else{
        this.isW4=false;
      }
      this.bu=true;
    },
    name_check:function(){
      let that3=this;
      axios.get('http://localhost:3000/user').then(function(data){
        for(var i in data.data){
          if(data.data[i].name==that3.name){
            that3.isW5=true;
            break;
          }else{
            if(that3.name==''){
              that3.isW5=true;
            }else{
              that3.isW5=false;
            }
          }
        }
      that3.bu=true;
        // if(that3.isW1==true){
        //   if(that3.id==''){
        //     alert('id不能为空')
        //   }else{
        //     alert('id已存在')
        //   }
        // }
      });
    },
    b2:function(){
      console.log(localStorage.id)
       if(localStorage.nochange=='admin'){
         
                this.$router.push({name:'User',params:{
                pr_user:'admin'
            }});
              }else{
                this.$router.push({name:'User',params:{
                pr_user:this.name
            }});}
    },
    name_check2:function(){
      if(this.name==''){
        this.isW5=true;
      }else{
        this.isW5=false;
      }
      this.bu=true;
    }
  
  },
  computed:{
    //图片上窜
     gp:function(){
       
      //  let a=this.pic;
      if(this.pic){
        return require("../assets/"+String(this.pic))
      }
      // if(String(this.pic)=='2.jpg'){
      //   return require("../assets/"+String(this.pic))
      // }
        
    }
  }

  
}

</script>>
<style lang="scss">
  .about{
    overflow: hidden;
    
    form{
      position: relative;
      height: 700px;
      width: 400px;
      border: 1px solid red;
      margin: 100px auto;
      .im{
        position: absolute;
        right: 11px;
        top: 70px;
        height: 80px;
        width: 80px;
        border: 1px solid red;
        img{
          height: 100%;
          width: 100%;
        }
      }
      .head{
        width: 100%;
        height: 40px;
        border-bottom: 1px solid red;
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      div{
        position: relative;
        width: 400px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        margin: 10px auto;
        span{
          position: absolute;
          left: 30px;
        }
        input[type='text']{
          border: none;
          border-bottom: 1px solid #333;
          outline: 0;
          color: black;
        }
      }
      .sex{
        .male{
          position: absolute;
          left: 100px;
        }
        input[value='male']{
          position: absolute;
          left: 160px;
          bottom: 7px;
        }
        .female{
          position: absolute;
          left: 200px;
        }
        input[value='female']{
          position: absolute;
          left: 265px;
          bottom: 7px;
        }
      }
      .pic{
        position: absolute;
        bottom: 145px;
        input{
          position: absolute;
          left: 112px;
          bottom: 3px;
        }
      }
      .introduce{
        textarea{
          position: absolute;
          bottom: -155px;
          left: 102px;
        }
      }
      .backs{
        position: absolute;
        text-align: center;
        bottom: 65px;
        left: 150px;
        width: 100px;
        height: 40px;
        border: 0;
        outline: 0;
        border: 1px solid red;
        line-height: 40px;
        cursor: pointer;
      }
      .ba{
        position: absolute;
        text-align: center;
        bottom: 65px;
        right: 20px;
        width: 100px;
        height: 40px;
        border: 0;
        outline: 0;
        border: 1px solid red;
        line-height: 40px;
        cursor: pointer;
      }
    }
}
.wrong{
  background-color: rgba(184, 99, 99,.1);
  color: black;
}
</style>