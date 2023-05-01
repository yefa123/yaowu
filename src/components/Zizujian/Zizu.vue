<template>
			<!-- 右边部分 -->
			<div class="right_one">
				<ul>
				<li>
				<div><img src="@/assets/dianneichaxun.png" alt=""></div>
				<p>店内药品查询</p>
				</li>
				<li>
				<div><img src="@/assets/guojiachaxun.png" alt=""></div>
				<p class="box">国家药品查询</p>
				</li>
				<li>
				<div><img src="@/assets/jiankangceliang.png" alt=""></div>
				<p>健康测量</p>
				</li>
				<li>
				<div ><img src="@/assets/zizuqingchuang.png" alt=""></div>
				<p>自助清创</p>
				</li>
				<li>
				<div ><img src="@/assets/yishuchaxun.png" alt=""></div>
				<p>医药书刊查询</p>
				</li>
				</ul>
				</div>
			
</template>

<script>
	export default{
		name:"Zizu"
	}
</script>

<style scoped>
	 .right_one ul{
				width: 1600px;
				height: 760px;
				margin-top:90px ;
				display: flex;
			     flex-direction: row;
				 flex-wrap: wrap;
				 margin-left: 40px;
				 
				
			
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
				margin-top: 39px;
			}
			.right_one>ul li:nth-child(5){
				margin-top: 39px;
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
