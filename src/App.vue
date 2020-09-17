<template>
  <div id="app"> 
    <div class="item">
      <label for="number">输入数字 input-</label>
      <input type="text" v-valid.input="'isNumber'" v-model="data1" id='number' placeholder="请输入数字">
    </div>
    <div class="item">
      <label for="alpha">输入英文 input</label>
      <input type="text" v-valid.input="'isAlpha'" v-model="data2" id="alpha" placeholder="请输入英文字符">
    </div>
    <div class="item">
       <label for="blur-number">blur 事件</label>
       <input type="text" v-my-valid.blur="'mobile'"  v-model="data3" placeholder="请输入手机号">
    </div>
     <div class="item">
       <label for="blur-number">自定义配置错误信息 事件</label>
       <input type="text"  v-model="data4" v-my-valid.blur="{type:'mobile',errorClass:'.error-msg',errorMsg:'手机号输入错误'}" placeholder="请输入手机号">
    </div>
    <div class="item">
       <label for="blur-number">textrea</label>
       <textarea type="text" v-model="data5" v-my-valid.input="'isNumber'" v-my-valid.blur="{type:'mobile',errorClass:'.error-msg',errorMsg:'信息写错误了'}" placeholder="请输入手机号"></textarea>
    </div>
   <div class="error-msg" style="color:red"></div>
    <div class="error-msg" v-valid.input="'isNumber'"></div>
  </div>
</template>

<script>  
import  {valid} from '../lib/index' 
export default {
  name: 'App',
  data(){
    return{
      data1:'33333ddddd',
      data2:'',
      data3:'',
      data4:'',
      data5:''
    } 
  },
  directives:{
   'my-valid':valid
  },
  components: { 
  },
  methods: {
    comlate(result){
      console.log(result)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.item{
  display: flex;
  margin-top: 20px; 
  font-size: 12px;
}
label{
  width: 150px;
  text-align: left;
}
</style>
