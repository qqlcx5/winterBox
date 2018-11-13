<template>
	<view class="page">
		<view class="header">
			<view class="header-left">
				<text class="icon">&#xe661;</text>
			</view>
			<view class="header-content">
				系统通知
			</view>
			<view class="header-right">

			</view>
		</view>
		<view class="msg-list">
			<view class="item" v-for="i in 5">
				<text class="item-title">
					2018-11-22 09:53
				</text>
				<view class="item-info">
					<view class="item-info-title">
						<image src="../../static/msg4.png" mode=""></image>
						<text class="">转账成功通知</text>
					</view>
					<view class="item-info-text">
						您于2018年11月21日 09:53分进行转账-转给王美丽-500CNY，现已到账，对方已收款。
						您于2018年11月21日
					</view>
				</view>
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
		min-height: 100vh;
		width: 750px;
		background-color: #F7F7F7;
	}

	.page .msg-list {
		padding-bottom: 60px;
	}

	.msg-list,
	.item,
	.item-info {
		display: flex;
		flex-direction: column;
		/* min-height: 0;
		width: 750px; */
	}

	.item-title {
		display: block;
		height: 80px;
		line-height: 80px;
		width: 750px;
		text-align: center;
		font-size: 24px;
		color: #999999;
	}

	.item-info {
		width: 690px;
		min-height: 200px;
		background-color: #ffffff;
		border-radius: 10px;
		border: solid 2px #d9d9d9;

		margin: 0 auto;
	}

	.item-info-title {
		display: flex;
		align-items: center;
		height: 100px;
		width: 690px;

	}

	.item-info-title image {
		width: 60px;
		height: 60px;
		margin: 0 20px;
	}

	.item-info-text {
		font-size: 26px;
		color: #999999;
		line-height: 36px;
		padding: 0 20px 20px;
		text-align: justify;
		box-sizing: border-box;
	}
</style>
