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
			<image class="msg-img" src="../../static/shopcar.png" mode=""></image>
			<text class="msg-title">您还未添加提币地址，现在去添加吧！</text>
			<view class="mgt80">
				<view class="btn">添加提币地址</view>
			</view> 
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

</style>
