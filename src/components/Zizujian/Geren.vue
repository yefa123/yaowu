<template>
			<!-- 右边部分 -->
			<div class="right_one">
				<ul>
				<li>
				<div><img src="@/assets/gerenyaoli.png" alt=""></div>
				<p>个人药历</p>
				</li>
				<li>
				<div><img src="@/assets/yaowuzhengli.png" alt=""></div>
				<p class="box">药物整理</p>
				</li>
				<li>
				<div><img src="@/assets/buliangfanying.png" alt=""></div>
				<p>不良反应上报</p>
				</li>
				<li>
				<div ><img src="@/assets/manxingdangan.png" alt=""></div>
				<p>慢病档案</p>
				</li>
				<li>
				<div ><img src="@/assets/gukeyongyao.png" alt=""></div>
				<p>顾客用药随访</p>
				</li>
				</ul>
				</div>
			
</template>

<script>
	export default{
		name:"Geren"
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
				 margin-left: 39px;
				 
				
			
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
			.right_one ul li:nth-child(4){
				margin-top: 40px;
			}
			.right_one ul li:nth-child(5){
				margin-top: 40px;
				
			}
			.right_one ul li div{
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
				 width: 220px;
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
