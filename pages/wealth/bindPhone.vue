<template>
	<view class="page">
		<view class="header">
			<view class="header-left">
				<text class="icon">&#xe661;</text>
			</view>
			<view class="header-content">
				绑定手机
			</view>
			<view class="header-right">
				<!-- <text class="icon">&#xe608;</text> -->
			</view>
		</view>
		<view class="tel-box">
			<view class="tel-title">绑定手机号码，让账户更安全</view>
			<view class="input-box"><input class="input-item" type="tel" value="" placeholder="输入11位手机号码" /></view>
			<view class="input-box mgt40"><input class="input-item" type="number" placeholder="输入验证码" value="" />
				<view class="Vcode">获取验证码</view>
			</view>
		</view>
		<view class="btn">
			提交
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		methods: {


		}
	}
</script>
<style>
	.tel-box {
		width: 80%;
		min-height: 100px;
		margin: 0 auto 100px;
		display: flex;
		flex-direction: column;
		
	}

	.tel-title {
		font-size: 28px;
		color: #999999;
		height: 100px;
		line-height: 100px;
	}

	.input-box {
		width: 100%;
		height: 90px;
		border-radius: 10px;
		overflow: hidden;
		display: flex;
		box-sizing: border-box;
		border: solid 2px #b6b6b6;
	}

	.input-item {
		flex: 1;
		height: 90px;
		padding-left: 30px;
		box-sizing: border-box;
		
		background-color: #ffffff;
		
	}

	.Vcode {
		width: 200px;
		height: 90px;
		line-height: 90px;
		background-color: #67ba61;
		font-size: 32px;
		color: #ffffff;
		text-align: center;
		
	}
</style>
