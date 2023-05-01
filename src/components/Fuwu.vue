<template>
<div class="fuwu">
	 <div class="Header">
	        <div @click="getYe()"><img src="@/assets/fanhui.png" alt="">返回</div>
	        <p>中医药服务</p>
	        <div @click="getShou()"><img src="@/assets/shouye.png" alt="">首页</div>
	    </div>
	    <div class="contain">
	        <div class="contain_first">
	            <div><img src="@/assets/yaocaiqiepian.png" alt=""></div>药材切片
	        </div>
	        <div class="contain_second">
	            <div><img src="@/assets/yaocaidafen.png" alt=""></div>药材打粉
	        </div>
	        <div class="contain_third">
	            <div><img src="@/assets/zhongyaodaijian.png" alt=""></div>中药熬胶
	        </div>
	       
	    </div>
			</div>
</div>
</template>

<script scoped>
	export default{
		name:"Fuwu",
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
	* {
	        margin: 0;
	        padding: 0;
	    }
	    .fuwu{
	        width: 100%;
	        height: 100%;
	        background: #f1f8ff;
	     
	    }
	
	    .Header {
	        width: 100%;
	        height: 142px;
	        background: #ffffff;
	        box-shadow: 0px 6px 20px 0px rgba(0, 121, 253, 0.10);
	        display: flex;
	        align-items: center;
	        justify-content: space-between;
	        min-width: 1000px;
	    }
	
	    .Header div {
	        font-size: 36px;
	        color: #007afd;
	        display: flex;
	        align-items: center;
	    }
	
	    .Header div:nth-child(1) img {
	        margin-left: 55px;
	        margin-right: 26px;
	    }
	
	    .Header div:nth-child(3) {
	        margin-right: 52px;
	    }
	
	    .Header div:nth-child(3) img {
	
	        margin-right: 26px;
	    }
	
	    .Header p {
	        font-size: 60px;
	        font-weight: 700;
	        color: #007afd;
	    }
	
	
	    .contain {
	        display: flex;
			flex-direction: row;
	        flex-wrap: wrap;
	        margin-top: 39px;
	        margin-left: 31px;
	
	    }
	
	
	    .contain_first,
	    .contain_second,
	    .contain_third
	    {
	        width: 426px;
	        height: 360px;
	        background: #ffffff;
	        border-radius: 20px;
	        box-shadow: 0px 0px 43px 3px #e5e5e5;
	        margin-top: 39px;
	        margin-bottom: 20px;
	        margin-left: 19px;
	        margin-right: 19px;
	        font-size: 36px;
	        font-weight: 700;
	        color: #17498c;
	        display: flex;
	        flex-direction: column;
	        align-items: center;
	    }
	
	    .contain_first div,
	    .contain_second div,
	    .contain_third div
	    {
	        width: 144px;
	        height: 144px;
	        margin-top: 68px;
	        margin-bottom: 58px;
	        background-color: rgba(0, 122, 253, 0.2);
	        border-radius: 72px;
	        display: flex;
	        align-items: center;
	        justify-content: center;
	    }
</style>
