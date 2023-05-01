// 导入Vue和VueRouter包
import Vue from "vue"
import VueRouter from "vue-router"

// 导入需要的组件
import Pageone from "../components/Pageone.vue"
import Pagetwo from "../components/Pagetwo.vue"
import Zhidao from "../components/Zhidao.vue"
import Gouyao from "../components/Zizujian/Gouyao.vue"
import Geren from "../components/Zizujian/Geren.vue"
import Zizu from "../components/Zizujian/Zizu.vue"
import Yaoxie from "../components/Zizujian/Yaoxie.vue"
import Fuwu from "../components/Fuwu.vue"
import Xuanchuan from "../components/Xuanchuan.vue"
import Life from "../components/Life.vue"
import Tousu from "../components/Tousu.vue"
import Chaxun from "../components/Chaxun.vue"
import Home from "../components/Home.vue"




//调用Vue.use()这个函数,把VueRouter安装为vue的插件
Vue.use(VueRouter)
//创建路由实例对象
export default new VueRouter({
  // routes是一个数组,用来定义hash地址和组件之间的对应关系
  routes:[
	  {path:'/',redirect:"/Pageone"},
	  {path:"/",component:Home,
	    children:[
		  {path:"/Pageone",component:Pageone},
	  {path:"/Pagetwo",component:Pagetwo}  
	  ]},
	  
	  {path:"/Zhidao",component:Zhidao,
	  children:[
		  {path:"/",redirect:"/Gouyao"},
		  {path:"/Gouyao",component:Gouyao},
		   {path:"/Geren",component:Geren},
		  {path:"/Zizu",component:Zizu},
		  {path:"/Yaoxie",component:Yaoxie}
	  ]},
		  
	  {path:"/Fuwu",component:Fuwu},
	  {path:"/Xuanchuan",component:Xuanchuan},
	  {path:"/Life",component:Life},
	  {path:"/Tousu",component:Tousu},
	  {path:"/Chaxun",component:Chaxun}
	 
   
  ]
})
//向外共享路由的实例对象

