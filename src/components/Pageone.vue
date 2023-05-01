<template>
	<div class="two">
		<img src="@/assets/jietu.png" alt="">
		<img src="@/assets/jietu.png" alt="">
		<img src="@/assets/jietu.png" alt="">
		<img src="@/assets/jietu.png" alt="">
		<img src="@/assets/jietu.png" alt="">
		<img src="@/assets/jietu.png" alt="">
		
	</div>
</template>

<script>
export default{
	name:'Pageone'
}
</script>

<style scoped>
	 .two{
		display: flex;
		overflow: auto;
		height:408px;
		flex-wrap: wrap;
		margin-right:30px ;
		padding-left: 20px;
	}
.two::-webkit-scrollbar{
		width: 8.34px;
		height: 10px;
		/* margin-top: 50px; */
	}
	 .two::-webkit-scrollbar-thumb{
		border-radius: 10px;
		background-color: #e8f2ff;
	}
	.two>img{
		width:233px;
		height:408px;
		margin-right: 20px;
		margin-top: 20px;
		
		}
</style>
