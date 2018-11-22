<template>
	<view class="page">
		<view class="header">
			<view class="header-left">
				<text class="icon">&#xe661;</text>
			</view>
			<view class="header-content">
				修改好友备注
			</view>
			<view class="header-right">
				<text>完成</text>
			</view>
		</view>
		<view class="list">
			<view class="item">
				<text class="item-name">
					昵称
				</text>
				<input class="item-input" type="text" value="" placeholder="大脸猫" />
				<image class="item-clear" src="../../static/clear.png" mode=""></image>
			</view>
			<view class="item">
				<text class="item-shield">
					屏蔽此人
				</text>
				<switch />
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
	.page {
		width: 750px;
		height: 100vh;
		background-color: #F7F7F7;
	}

	.header-right text {
		position: absolute;
		right: 30px;
		top: 70px;
		font-size: 28px;
		color: #67ba61;
	}

	.list {
		display: flex;
		flex-direction: column;
		padding: 30px;
		box-sizing: border-box;
	}

	.item {
		height: 88px;
		line-height: 88px;
		width: 690px;
		display: flex;
		align-items: center;
		background-color: #FFFFFF;
		margin-bottom: 30px;
		border-radius: 10px;
	}

	.item-name {
		margin-left: 30px;
		width: 120px;
		color: #333333;
	}

	.item-shield {
		margin-left: 30px;
		width: 120px;
		color: #333333;
		flex: 1;
	}

	.item-clear {
		width: 40px;
		height: 40px;
		margin-right: 30px;
	}

	.item-input {
		flex: 1;
		height: 110px;
		line-height: 110px;
	}
</style>
