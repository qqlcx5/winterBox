<template>
	<view class="">
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
		<view class="msg-box">
			<view v-show="false">
				<image class="msg-img" src="../../static/success3.png" mode=""></image>
			</view>
			<view v-show="true">
				<image class="msg-img" src="../../static/success2.png" mode=""></image>
			</view>
			
			<text class="msg-title">已绑定手机号码</text>
			<text class="msg-desc">779043652@qq.com</text>
		</view>
		<view class="untie">
			解绑
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		}
	}
</script>
<style>
	.msg-box {
		min-height: 100px;
		width: 750px;
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-top: 140px;
	}

	.msg-img {
		width: 200px;
		height: 200px;
		margin-bottom: 40px;
	}

	.msg-title {
		font-size: 28px;
		color: #999999;
		margin-bottom: 10px;
	}

	.msg-desc {
		color: #333333;
	}

	.untie {
		position: fixed;
		bottom: 60px;
		left: 50%;
		width: 570px;
		height: 100px;
		line-height: 100px;
		text-align: center;
		font-size: 36px;
		color: #deae42;
		background-color: #ffffff;
		border: solid 2px #deae42;
		transform: translateX(-50%);
	}
</style>
