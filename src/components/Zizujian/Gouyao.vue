<template>

		
			<!-- 右边部分 -->
			<div class="right_one">
				<ul>
				<li>
				<div><img src="@/assets/yaopingdaigou.png" alt=""></div>
				<p>药品代购</p>
				</li>
				<li>
				<div><img src="@/assets/songyaoshangmen.jpg" alt=""></div>
				<p class="box">送药上门</p>
				</li>
				<li>
				<div><img src="@/assets/cailingxiaoshou.jpg" alt=""></div>
				<p>拆零销售</p>
				</li>
				<li>
				<div ><img src="@/assets/guoqiyaoping.jpg" alt=""></div>
				<p>家庭药箱整理</p>
				</li>
				<li>
				<div ><img src="@/assets/lengcangdai.jpg" alt=""></div>
				<p>免费冷藏袋</p>
				</li>
				<li>
				<div ><img src="@/assets/wangdiandingsong.jpg" alt=""></div>
				<p>网订店送</p>
				</li>
				</ul>
				</div>
</template>

<script>
	export default{
		name:"Gouyao"
	}
</script>

<style scoped>
	.content .right_one ul{
		width: 1600px;
		height: 760px;
		margin-top:90px ;
		display: flex;
	     flex-direction: row;
		 flex-wrap: wrap;
		 margin-left:39px;
		 
		
	
	}
	 .right_one>ul li{
				display:inline-block ;
				list-style: none;
				width: 490px;
				height: 360px;
				background-color: #FFFFFF;
				margin-left: 40px;
				border-radius: 20px;
				box-shadow: 0px 0px 41.71px 0px #e5e5e5; 
				display: flex;
			
			
				
			} 
			.right_one>ul li:nth-child(4){
				margin-top: 48px;
			}
			.right_one>ul li:nth-child(5){
				margin-top: 48px;
			}
			.right_one>ul li:nth-child(6){
				margin-top: 48px;
			}
			.right_one li div{
				 width: 144px;
				 height: 144px;
				 background-color: aliceblue;
				 border-radius: 50%;
				 margin-top: 108px;
				 margin-left: 63px;
				 
			 }
			 .right_one img{
				margin: 21px;
				
				
			 }
			 .right_one p{
				 width: 210px;
				 height: 35px;
				 font-size: 35px;
				 font-weight:bold ;
				 color: #17498C;
				margin-top:164px;
				margin-left:36px;
				 
			 }
			 .right_one .box{
				 width: 240px;
				 height: 35px;
			 }
</style>
