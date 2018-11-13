<template>
	<view class="page">
		<view class="header">
			<view class="header-left">
				<text class="icon">&#xe661;</text>
			</view>
			<view class="header-content">
				添加提币地址
			</view>
			<view class="header-right">
				<text>保存</text>
			</view>
		</view>
		<view class="list">
			<text class="list-title">
				如需请填写以下信息
			</text>
			<view class="item">
				<text class="item-name">银行名称</text>
				<input class="item-input" type="text" placeholder="招商银行">
			</view>
			<view class="item">
				<text class="item-name">开户行名称</text>
				<input class="item-input" type="text" placeholder="万达支行">
			</view>
			<view class="item">
				<text class="item-name">持卡人</text>
				<input class="item-input" type="text" placeholder="王熊猫">
			</view>
			<view class="item">
				<text class="item-name">银行卡号</text>
				<input class="item-input" type="text" placeholder="622202140216548569">
			</view>
			<text class="list-title top-border">
				如需请填写以下信息
			</text>
			<view class="item">
				<text class="item-name">身份证号</text>
				<input class="item-input" type="text" placeholder="15960286547">
			</view>
			<view class="item">
				<text class="item-name">手机号码</text>
				<input class="item-input" type="text" placeholder="招商银行">
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
	.header-right text {
		position: absolute;
		right: 30px;
		top: 70px;
		font-size: 28px;
		color: #ffffff;
	}

	.list {
		width: 750px;
		min-height: 100px;
		
	}

	.list-title {
		height: 100px;
		line-height: 100px;
		width: 690px;
		display: block;
		color: #deae42;
		font-size: 28px;
		border-bottom: 2px solid #E5E5E5;
		padding: 0 30px;
	}

	.top-border {
		border-top: 20px solid #f6f6f6;
	}


	.item {
		width: 750px;
		line-height: 100px;
		height: 100px;
		display: flex;
		padding: 0 30px;
		box-sizing: border-box;
		border-bottom: 2px solid #e5e5e5;

	}

	.item-name {
		width: 180px;
	}

	.item-input {
		flex: 1;
		height: 100px;
		text-align: right;
		font-size: 32px;
		color: #333333;
	}
</style>
