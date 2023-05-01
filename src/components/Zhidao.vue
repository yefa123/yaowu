<template>
		<div class="contain">
				<!-- 头部 -->
				<div class="header">
					<div class="left" @click="getYe()">
					<img src="@/assets/jiantou.png" >
					<p>返回</p>
					</div>
					<span>药事指导</span>
					<div class="right" @click="getInfo()">
						<img src="@/assets/shouye.png" alt="">
						<p >首页</p>
					</div>
				</div>
				<!--内容部分 -->
				<div class="content">
				<!-- 左边部分 -->
			<div class="left_one">
				<div :class="['init',initIndex==index?'cup':'init']" v-for="(item,index) in list" :key="index" @click="getShow(index,item)">
					<img :src="initIndex==index?item.imgUrl:item.imgUrlNo" >
					<p>{{item.name}}</p>
					 
				</div>
				   <!-- <router-link to="/Yaoxie" tag="div"></router-link>
					<router-link to="/Gouyao" tag="div"></router-link>
					<router-link to="/Geren" tag="div"></router-link>
					<router-link to="/Zizu" tag="div"></router-link> -->
				
				</div>
				<!-- 右边部分 -->
				<router-view></router-view>
				</div>
			</div>
</template>

<script>
	export default{
		name:'Zhidao',
		data(){
			return{
				initIndex:0,
				list:[
					{name:"药械指导",imgUrl:require("../assets/yaoxiezhi.png"), imgUrlNo:require("../assets/yaoxiezhidao.png"), url:'/Yaoxie'},
					{name:"购药服务",imgUrl:require("@/assets/gouyaofuwu.png"), imgUrlNo:require("../assets/gouyao.png"), url:"/Gouyao"},
					{name:"个人药历档案",imgUrl:require("@/assets/gerendangan.png"), imgUrlNo:require("../assets/dangan.png"), url:"/Geren"},
					{name:"健康自助",imgUrl:require("@/assets/jiankangzizhu.png"), imgUrlNo:require("../assets/jiankang.png"), url:"/Zizu"},
					]
			}
		},
		
		methods:{
			getInfo(){
				this.$router.push("./")
				
			},
			getYe(){
				this.$router.push("./")
				
			},
			getShow(index,item){
				this.initIndex = index;
				this.$router.push(item.url)
			}
		}
	}
</script>

<style scoped>
		*{
					margin: 0px;
					padding: 0px;
				}
			.contain{
					width: 100%;
					min-width: 1920px;
					/* margin: 0 auto; */
					font-family: 'Microsoft YaHei';
					display: flex;
					flex-direction: column;
			
				}
				.header{
					width: 100%;
					height:142px ;
					background-color: #FFFFFF;
					display: flex;
					justify-content: space-between;
					box-shadow: 0px 6px 20px 0px rgba(0,121,253,0.10); 
				}
				.header .left{
					margin: 60px 55px;
					width:120px ;
					height:40px;
					display: flex;
					justify-content: center;
					align-items: center;
					
				}
				.header .left>img{
					width: 22px;
					height: 40px;
					margin-right: 22px;
					margin-top: 5px
					
				}
				.header .left>p{
					width:74px;
					height:35px ;
					font-size: 36px;
					color: #007AFD;
					line-height: 36px;
					font-weight: Regular;
				}
				.header span{
					display: inline-block;
					margin: 0 auto;
					font-size: 60px;
					font-weight: bold;
					color: #007AFD;
					margin-top: 36px;
					
				}
				.header .right{
					width:180px;
					height: 50px;
					display: flex;
					align-items: center;
					margin-right: 52px;
					margin-top: 49px;
				}
				.right img{
					width: 50px;
					height: 50px;
				}
				.right p{
					width: 70px;
					height: 35px;
					font-size: 35px;
					line-height: 35px;
					color: #007AFD;
					font-weight: Regular;
					margin-top: 7px;
					margin-left: 10px;
				}
				.contain .content{
					width: 100%;
					height:938px;
					background-color: #F1F8FF;
					margin-top: auto;
					display: flex;
					box-shadow: 0px 6px 20px 0px rgba(0,121,253,0.10); 
					
				}
				.content .left_one{
					width: 283px;
					height: 500px;
					display: flex;
					flex-direction: column;
					margin-top:198px;
					margin-left: 0;
				}
				 .left_one .init{
					width: 283px;
					height: 100px;
					background-color: #FFFFFF;
					border-radius: 0 50px  50px 0;
					margin-top: 20px;
					display: flex;
					
					
				}
				 .left_one .cup{
					background-color:#007AFD ;
					
				}
				 .left_one .cup>p{
					color: white!important;
				
				}
				/* .left_one> ul li:nth-child(3) p{
					margin-left: 23px;
				} */

				/* .content .left-one ul>li:focus{
						background-color:#007AFD ;
						outline: none;
					} */
			/* .content .left_one ul>li:hover{
					background-color:#007AFD ;
					outline: none;
					cursor: pointer;
				}
				.content ul li:hover p{
					color: #FFFFFF;
					cursor: pointer;
				} */
				.left_one .init img{
					width: 62px;
					height: 62px;
					margin-top: 19px;
					margin-left: 31px;
				}
				.left_one .init>p{
					color: #32518A;
					font-weight: bold;
					width: 145px;
					height: 24px;
					font-size: 24px;
					margin-top: 38px;
					margin-left: 22px;
				}
				.content .right_one ul{
					width: 1600px;
					height: 760px;
					margin-top:90px ;
					display: flex;
				     flex-direction: row;
					 flex-wrap: wrap;
				}
		
</style>
