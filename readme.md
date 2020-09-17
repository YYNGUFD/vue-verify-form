# vue-verify-form
提供表单输入框进行校验的插件，通过指令的方式绑定到表单元素上

## 安装
``` jsx static
npm i vue-verify-form
```
## 使用

### 引入

#### 全局引入
```jsx static
import validator from 'vue-verify-form'
Vue.use(validator) 

```
#### 局部引入使用

```jsx static
import {valid} from 'vue-verify-form'
export default { 
   directives:{
     'valid':valid
   },
 }
```
### 使用组件
##### 只能输入某类型
* 只能输入数字
```jsx static
  <input type="text" v-valid.input="'isNumber'" v-model="data1" id='number' placeholder="请输入数字">  
```
* 只能输入英文字母
```jsx static
<input type="text" v-valid.input="'isAlpha'" v-model="data1" id='number' placeholder="请输入数字">
```
##### 表单操作事件状态
* 失去焦点进行校验

```jsx static
    <input type="text" v-valid.blur="'mobile'" v-model="data2" id="alpha" placeholder="请输入手机号">
   
```

* 值更改时候进行校验

```jsx static
    <input type="text" v-valid.change="'pwd'" v-model="data2" id="alpha" placeholder="请输入手机号">
```
* 键盘弹起进行更改

```jsx static
    <input type="text" v-valid.keyup="'pwd'" v-model="data2" id="alpha" placeholder="请输入手机号">
```
##### 自定义内容
* 设置回调验证函数

```jsx static
 <input type="text" v-valid.keyup="{type:'mobile',completed:completed}" v-model="data2" id="alpha" placeholder="请输入手机号">
 export default{
     methods:{
         completed(result,value){
             console.loog(result) //校验结果
             console.log(value)//当前数值
         }
     }
 }
```
* 设置自定义正则校验

```jsx 
     <input type="text" v-valid.input="{type:'pwd',reg:/[^\d]/g}" placeholder="自定义正则内容输入"> 
```
即使设置了type,但是正则的校验还是按照当前传入的为准，正则reg会优先被使用

* 设置外界的提示选择器

```jsx static
    <input type="text"  v-model="data4" v-my-valid.blur="{type:'mobile',errorClass:'.error-msg',errorMsg:'手机号输入错误'}" placeholder="请输入手机号">
    <div class="error-msg"></div>
   
```


## 参数配置
### 可监听的表单操作类型
 
- change 
- input  
- blur  
- focus 
- click  
- keyup  
- keydown 
- select 

### 传入指令为字符串时
参数| 类型 | 参数意义 | 可选值
---|---| ---| ---| 
type | string | 要进行输入表单类型 |见下表

``` jsx static
   <input type="text" v-valid.input="'isNumber'" v-model="data1" placeholder="请输入数字">
``` 
-   pwd:密码, 
-   mobile: 手机号
-   chineseName: 中文名字
-   integer:整数
-   email:邮箱
-   decimal:分数, 
-   alphaNum: 英文和数字, 
-   alpha:英文字母 
-   numeric:数字,  
-   msgcode:验证码 
-   url:验证url
-   isNumber: 输入数字
-   isAlpha:只能输入英文

### 传入指令为对象时
参数| 类型 | 参数意义 | 可选值
---|---| ---| ---| 
type | row 1 col 2 | row 1 col 2 | row 1 col 2
completed |Function| 触发操作时进行回调 | ()=>{} | 
reg | RegExp | 自定义的校验类型,设置后将使用该值 | 自定义
errorMsg | String | 校验错误的时候提示信息 | ''
errorClass | String | 选择器，校验错误的时候渲染结果 | ''



