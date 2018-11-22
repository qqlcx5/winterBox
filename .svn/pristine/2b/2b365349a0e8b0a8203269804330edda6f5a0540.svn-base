<template>
	<view class="page">
		<view class="header">
			<view class="header-left">
				<text class="icon">&#xe661;</text>
			</view>
			<view class="header-content">
				提币记录
			</view>
			<view class="header-right">

			</view>
		</view>
		<view class="msg-list">
			<view class="item" v-for="i in 3">
				<text class="item-title">
					发生时间：2018-10-29 20:19:21
				</text>
				<view class="item-box">
					<view class="item-box-left">
						<view class="item-box-left-top">
							<image src="../../static/B3.png" mode=""></image>
							CNY
						</view>
						<view class="item-box-left-bottom">
							余额:3000
						</view>
					</view>
					<view class="item-box-right">
						<text class="item-box-right-tibi">提币地址</text>
						<text class="item-box-right-address">大熊猫#招商银行(尾号6789)</text>
						<view class="item-box-right-cost">
							<view class="cost-num-box">
								<view class="cost-name">数量：</view>
								<view class="cost-num">21.01</view>
							</view>

						</view>
						<view class="item-box-right-cost">
							<view class="cost-left-box">
								<view class="cost-name">手续费：</view>
								<view class="cost-num">0.74</view>
							</view>
							<view class="cost-deal">
								处理中
							</view>
						</view>
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
	.item {
		display: flex;
		flex-direction: column;

	}

	.item-title {
		display: block;
		height: 80px;
		line-height: 80px;
		width: 750px;
		text-align: left;
		font-size: 24px;
		color: #999999;
		margin-left: 30px;
	}

	.item-box {
		width: 690px;
		height: 300px;
		background-color: #ffffff;
		border-radius: 10px;
		border: solid 2px #d9d9d9;
		margin: 0 auto 30px;
		display: flex;
	}

	.item-box-left {
		width: 200px;
		height: 300px;
		background-color: #deae42;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #ffffff;
	}

	image {
		width: 60px;
		height: 60px;
		margin-right: 20px;
		
	}

	.item-box-left-top {
		width: 200px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 40px;
	}

	.item-box-right {
		flex: 1;
		height: 300px;
		display: flex;
		flex-direction: column;
		padding: 30px;
		box-sizing: border-box;
	}

	/* 命名有点乱 */

	.item-box-right-cost {
		display: flex;
	}
	.item-box-right-tibi {
		font-size: 26px;
		color: #b6b6b6;
		margin-bottom: 10px;
	}

	.item-box-right-address {
		font-size: 28px;
		color: #333333;
		margin-bottom: 40px;
	}

	.cost-left-box {
		flex: 1;
		display: flex;
	}

	.cost-name {
		color: #262626;
		font-weight: bold;
		width: 140px;
	}

	.cost-num {
		color: #fc3036;
		flex: 1;
	}

	.cost-num-box {
		display: flex;
		margin-bottom: 30px;
	}

	.cost-deal {
		font-size: 28px;
		color: #ec584e;
	}
</style>
