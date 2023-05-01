<template>
	 <div class="app">
	    <!-- 头部 -->
	    <div class="head">
	      <div class="head_center">
	        <div class="one" @click="getYe()">
	          <img src="@/assets/fanhui.png" alt="">
	          <p>返回</p>
	        </div>
	        <div class="two">
	          <p>一键预约</p>
	        </div>
	        <div class="three" @click="getShou()">
	          <img src="@/assets/shouye.png" alt="">
	          <p>首页</p>
	        </div>
	      </div>
	     </div>
	     <!-- 内容 -->
	     <div class="contain">
	       <div class="center">
	        <div class="one">
	        <div class="yuan"><img src="@/assets/zhengli.png" alt=""></div>
	            <p>药物整理预约</p>
	         </div>
	        <div class="second">
	         <div class="yuan"><img src="@/assets/daigou.png" alt=""></div>
	         <p>药品代购预约</p>
	       </div>
	       <div class="three">
	         <div class="yuan"><img src="@/assets/daijian.png" alt=""></div>
	         <p>中药代煎预约</p>
	       </div>
	       <div class="four">
	        <div class="yuan"><img src="@/assets/yaoxiang.png" alt=""></div> 
	         <p>药箱整理预约</p>
	       </div>
	       <div class="five">
	        <div class="yuan"><img src="@/assets/jianbie.png" alt=""></div> 
	         <p>中药材鉴别预约</p>
	       </div>
	       </div>
	     </div>
	  </div>
</template>

<script>
	export default{
		name:"Chaxun",
		methods:{
			getShou(){
				this.$router.push("./")
			},
			getYe(){
				this.$router.push("./")
			}
		}
		
	}
</script>

<style scoped>
	*{
	  margin: 0;
	  padding: 0;
	}
	body{
	  background-color: #F1F8FF;
	}
	.app{
	  width: 100%;
	  min-width: 1920px;
	}
	.head{
	  width: 100%;
	  height: 142px;
	  min-width: 1920px;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  background-color:#FFFFFF ;
	  
	}
	.head_center{
	  width: 95%;
	  height: 60px;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	}
	.head_center p{
	  color: #007AFD;
	}
	.head_center .one{
	  width: 118px;
	  height: 40px;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	
	}
	.head_center .one>img{
	  width: 22px;
	  height: 40px;
	}
	.head_center .one>p{
	  font-size:36px;
	  font-weight: 400;
	
	}
	.head_center .two{
	  width:250px;
	  height: 70px;
	}
	
	.head_center .two p{
	  font-size: 60px;
	  font-weight: 700;
	}
	.head_center .three{
	  width:147px;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	}
	.head_center .three img{
	  width: 50px;
	  height: 47px;
	}
	.head_center .three p{
	  font-size:36px ;
	  font-weight:400;
	  
	}
	
	.contain{
	  width: 100%;
	  min-width: 1920px;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	.contain .center{
	  display: flex;
	  flex-wrap:wrap;
	  justify-content:flex-start;
	  margin-top: 78px;
	  margin-left: 50px;
	  /* width: 1960px;
	  height: 768px; */
	
	}
	.contain .center .one{
	  width: 580px;
	  height: 360px;
	  background: #ffffff;
	border-radius: 20px;
	box-shadow: 0px 0px 41.71px 1.29px #e5e5e5; 
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  margin-left: 40px;
	  margin-bottom: 20px;
	
	}
	.contain .center .second{
	  width: 580px;
	  height: 360px;
	  background: #ffffff;
	border-radius: 20px;
	box-shadow: 0px 0px 41.71px 1.29px #e5e5e5; 
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  margin-left: 40px;
	  margin-bottom: 20px;
	
	}
	.contain .center .three{
	  width: 580px;
	  height: 360px;
	  background: #ffffff;
	border-radius: 20px;
	box-shadow: 0px 0px 41.71px 1.29px #e5e5e5; 
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  margin-left: 40px;
	  margin-bottom: 20px;
	}
	.contain .center .four{
	  width: 580px;
	  height: 360px;
	  background: #ffffff;
	border-radius: 20px;
	box-shadow: 0px 0px 41.71px 1.29px #e5e5e5; 
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  margin-left: 40px;
	  margin-top: 48px;
	}
	.contain .center .five{
	  width: 580px;
	  height: 360px;
	  background: #ffffff;
	border-radius: 20px;
	box-shadow: 0px 0px 41.71px 1.29px #e5e5e5; 
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  margin-left: 40px;
	  margin-top: 48px;
	}
	.contain .center div>.yuan{
	  width: 144px;
	  height: 144px;
	  background: #cde5fffd;
	  border-radius: 50%;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  margin-left: 40px;
	}
	.contain .center div>.yuan img{
	  width: 102px;
	  height: 102px;
	  border: 1px dashed black;
	
	}
	.contain .center div>p{
	  font-size:36px;
	  font-weight:700;
	  color:#17498C;
	}
</style>
