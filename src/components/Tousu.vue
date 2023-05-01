<template>
	<div>
		
		    <div class="Header">
		        <div class="Header_left" @click="getYe()"><span
		                style="margin-right: 14px;font-size: 60px;color: #007afd;font-weight: 700;">15:47</span>
		            <div><span style="font-size: 12px;color: #969696;margin-bottom: 10px;">辛丑年二月十五</span>
		                <p style="font-size: 12px;color: #969696">2021/03/27星期五</p>
		            </div>
		        </div>
		      <div class="Header_center"><img src="@/assets/tousuheader.png" alt=""></div>  
		        <div class="Header_right">
		            <div class="Header_right_txt" @click="getShou()">
		                <div>2</div>
		                <div>7</div>
		            </div>
		            <p style="text-align: center;
		            font-size: 14px;  
		            color: #969696;">药事服务（项）</p>
		        </div>
		    </div>
		    <div class="Contain">
		        <div class="Contain_FirstRow">
		            <div><img src="@/assets/haoping.png" alt="">好评</div>
		            <div><img src="@/assets/chaping.png" alt="">差评</div>
		        </div>
		        <div class="Contain_SecondRow"><label for="">联系方式：</label><input type="text" placeholder="请输入电话号码"></div>
		        <div class="Contain_ThirdRow"><label for="">反馈内容：</label><textarea name="" id="" cols="30" rows="10"
		                placeholder="请输入备注"></textarea></div>
		        <div class="Contain_ForthRow">
		            <button>提 交</button>
		            <button>返回</button>
		        </div>
		    </div>
	</div>
</template>

<script>
	export default{
		name:"Tousu",
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
	        padding: 0;
	        margin: 0;
	    }
	
	    html,
	    body {
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
	        justify-content: space-between;
	        align-items: center;
	        min-width: 1700px;
	    }
	
	    .Header_center  {
	        width: 758px;
	       height:140px;
	    
	    }
	  .Header_center img{
	      width: 100%;
	      height: 100%;
	  }
	    .Header_left {
	        display: flex;
	        align-items: center;
	        margin-left: 50px;
	    }
	
	    .Header_right {
	        display: flex;
	        flex-direction: column;
	        align-items: center;
	        margin-right: 51px;
	    }
	
	    .Header_right_txt {
	        display: flex;
	    }
	
	    .Header_right_txt div {
	        width: 41px;
	        height: 62px;
	        background: #d7eaff;
	        font-size: 55px;
	        text-align: left;
	        color: #007afd;
	        text-align: center;
	        line-height: 62px;
	        margin-bottom: 18px;
	    }
	
	    .Header_right_txt div:nth-child(1) {
	        margin-right: 10px;
	    }
	
	    .Contain {
	        width: 1687px;
	        height: 815px;
	        margin: 0 auto;
	        margin-top: 35px;
	        background: #ffffff;
	        border-radius: 20px;
	        box-shadow: 0px 0px 41.71px 1.29px #e5e5e5;
	        display: flex;
	        flex-direction: column;
	
	    }
	
	    .Contain_FirstRow {
	        display: flex;
	        margin-top: 100px;
	        margin-left: 425px;
	    }
	
	    .Contain_FirstRow div {
	        font-size: 72px;
	        font-weight: 800;
	        text-align: left;
	        color: #007dff;
	        display: flex;
	        align-items: center;
	    }
	
	    .Contain-FirstRow div:nth-child(1) {
	        margin-right: 244px;
	    }
	
	    .Contain_FirstRow div img {
	        margin-right: 44px;
	    }
	
	    .Contain_SecondRow {
	        margin-top: 75px;
	        margin-left: 93px;
	
	    }
	
	    .Contain_SecondRow input {
	        width: 399px;
	        height: 61px;
	        background: #f5f9fe;
	        border: 1px solid #aad0f9;
	        border-radius: 5px;
	        font-size: 24px;
	        outline: none;
	        padding-left: 20px;
	        margin-left: 31px;
	    }
	
	    .Contain_SecondRow label,
	    .Contain_ThirdRow label {
	        font-size: 24px;
	        text-align: right;
	        color: #2a3765;
	
	    }
	
	    .Contain_ThirdRow label {
	        margin-top: 15px;
	    }
	
	    .Contain_ThirdRow {
	        margin-top: 39px;
	        margin-left: 93px;
	        display: flex;
	    }
	
	    .Contain_ThirdRow textarea {
	        width: 1330px;
	        height: 241px;
	        background: #f5f9fe;
	        border: 1px solid #aad0f9;
	        border-radius: 5px;
	        padding-left: 20px;
	        margin-left: 31px;
	        font-size: 24px;
	        padding-left: 20px;
	        padding-top: 15px;
	        resize: none;
	        outline: none;
	        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	
	    }
	
	    .Contain_ForthRow {
	        margin-left: 622px;
	        margin-top: 62px;
	    }
	
	    .Contain_ForthRow button {
	        width: 194px;
	        height: 70px;
	        background: #007afd;
	        border-radius: 5px;
	        border: none;
	        font-size: 30px;
	        color: #ffffff;
	        margin-left: 27px;
	        margin-right: 27px;
	    }
</style>
