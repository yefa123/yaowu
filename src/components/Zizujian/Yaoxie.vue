<template>
	<div class="right_one">
		<ul>
		<li>
		<div><img src="@/assets/shequ.png" alt=""></div>
		<p>社区指导</p>
		</li>
		<li>
		<div><img src="@/assets/dianpu.png" alt=""></div>
		<p class="box">用药用械指导</p>
		</li>
		<li>
		<div><img src="@/assets/dianhua.png" alt=""></div>
		<p>电话指导</p>
		</li>
		<li>
		<div ><img src="@/assets/yiliao.png" alt=""></div>
		<p>医疗器械 试用指导</p>
		</li>
		<li>
		<div ><img src="@/assets/xianshang.png" alt=""></div>
		<p>网络咨询</p>
		</li>
		</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Yaoxie"
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
		 margin-left: 36px;
		 
		
	
	}
	.right_one>ul li{
			display:inline-block ;
			list-style: none;
			width: 490px;
			height: 360px;
			background-color: #FFFFFF;
			margin-left: 42px;
			border-radius: 20px;
			box-shadow: 0px 0px 41.71px 0px #e5e5e5; 
			display: flex;
			/* justify-content: center;
			align-items: center; */
			
		
		
			
		} 
		.right_one>ul li:nth-child(4){
			margin-top: 48px;
		}
		.right_one ul li:nth-child(4) p{
			margin-top:144px;
		}
		.right_one>ul li:nth-child(5){
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
			 width: 144px;
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
