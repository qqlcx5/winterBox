<template>
	<view class="page">
		<view class="header">
			<view class="header-left">
				<text class="icon">&#xe661;</text>
			</view>
			<view class="header-content">
				充币记录
			</view>
			<view class="header-right">

			</view>
		</view>
		<view class="msg-list">
			<view class="item" v-for="i in 3">
				<view class="item-title">
					<text>发生时间：2018-10-29 20:19:21</text>
					<text class="item-note">备注：站外模拟入款操作</text>
				</view>
				<view class="item-info">
					<view class="item-info-title">
						<view class="item-info-name">
							<image src="../../static/B1.png" mode=""></image>
							<text class="">CNY(人民币)</text>
						</view>
						<view>
							订单号：69432269
						</view>

					</view>
					<view class="item-box">
						<view class="item-box-num">数量：<text class="item-box-num-i">50</text></view>
						<view class="item-box-state">已处理</view>
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
	}

	.item-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80px;
		width: 750px;
		font-size: 24px;
		color: #999999;
		padding: 0 30px;
		box-sizing: border-box;
	}

	.item-note {
		color: #333333;
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
		justify-content: space-between;
		align-items: center;
		height: 100px;
		width: 690px;
		padding: 0 20px;
		box-sizing: border-box;
		color: #999999;
		border-bottom: solid 2px #f6f6f6;

	}

	.item-info-name {
		height: 100px;
		width: 300px;
		display: flex;
		align-items: center;
		color: #333333;
	}

	.item-info-title image {
		width: 60px;
		height: 60px;
		margin-right: 20px;
	}

	.item-box {
		height: 120px;
		width: 690px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 50px;
		box-sizing: border-box;
	}

	.item-box-num {
		font-size: 36px;
		color: #878787;
	}

	.item-box-num-i {
		color: #fc3036;
	}

	.item-box-state {
		font-size: 28px;
		color: #67ba61;
	}
</style>
