<template>
	<div id="sent">
		<img src="../assets/zhengjain.png" >
		<img src="../assets/zuizhenjian.png" >
		<img src="../assets/zhengjain.png" >
		<img src="../assets/zuizhenjian.png" >
		<img src="../assets/zhengjain.png" >
		<img src="../assets/zuizhenjian.png" >
		
	</div>
</template>

<script>
	export default{
		name:'Pagetwo'
	}
</script>

<style scoped>
	.left_bottom #sent{
		display: flex;
		overflow: auto;
		height:408px;
		flex-wrap: wrap;
		margin-right:30px ;
		padding-left: 20px;
	}
	.left_bottom #sent::-webkit-scrollbar{
		width: 10px;
		height: 10px;
	}
	.left_bottom  #sent::-webkit-scrollbar-thumb{
		border-radius: 10px;
		background-color: #e8f2ff;
	}
	.left_bottom  #sent>img{
		width:233px;
		height:408px;
		margin-right: 20px;
		margin-top: 20px;
		
		}
</style>
