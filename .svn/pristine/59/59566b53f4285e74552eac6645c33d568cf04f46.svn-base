<template>
	<view class="page">
		<view class="header">
			<view class="header-left " @tap="backs">
				<text class="icon">&#xe661;</text>
			</view>
			<view class="header-content">
				常见问题
			</view>
			<view class="header-right">
			</view>
		</view>
		<view>
			<image class="banner-logo" src="../../static/banner5.png" mode=""></image>
		</view>
		<view class="dialog" v-for="item in 3" :key="item">
			<view class="dialogItem you">
				<view>
					<image class="you-img" src="../../static/msg3.png"></image>
				</view>

				<view class="dialog-box you-box">
					财富中的币种如何提现？
					<view class="you-arrow"></view>
				</view>


			</view>
			<view class="dialogItem my">
				<view class="dialog-box my-box">
					点击【财富】中的CNY，选中提币，
					点击全部提币，即可将所有金额进行
					提现。
					<view class="my-arrow"></view>
				</view>
				<view>
					<image class="my-img" src="../../static/msg1.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				isSend: false
			}
		},
		methods: {}

	}
</script>

<style>
	.page {
		min-height: 100vh;
		width: 100%;
		background-color: #F7F7F7;
	}

	.banner-logo {
		width: 750px;
		height: 250px;
		margin-bottom: 30px;
	}

	.bottomBox {
		height: 100px;
		width: 100%;
	}

	.isbottomBox {
		height: 400px;
		width: 100%;
	}

	.dialogTime {
		width: 100%;
		height: 100px;
		line-height: 100px;
		font-size: 28px;
		color: #999999;
		text-align: center;
	}

	.dialogItem {
		display: flex;
		align-items: center;
		width: 100%;
		min-height: 80px;
		margin-bottom: 30px;
		font-size: 28px;

	}

	.you {
		position: relative;
		justify-content: flex-start;
	}

	.you-img {
		position: absolute;
		top: 0;
		left: 30px;
		width: 80px;
		height: 80px;
		border-radius: 12px;
	}

	.dialog-box {
		min-width: 40px;
		max-width: 50%;
		min-height: 40px;
		padding: 15px;
		box-sizing: border-box;
		word-break: break-word;
		border-radius: 10px;

		font-size: 28px;
	}

	.you-box {
		margin-left: 140px;
		background-image: linear-gradient(90deg,
			#deae42 0%,
			#c9912f 100%);
		color: #FFFFFF;
		position: relative;
	}

	.you-arrow {
		position: absolute;
		top: 20px;
		left: -28px;
		width: 0;
		height: 0;
		font-size: 0;
		border: solid 16px;
		background-color: #f7f7f7;
		border-color: #f7f7f7 #deae42 #f7f7f7 #f7f7f7;
	}

	.my {
		position: relative;
		justify-content: flex-end;
	}

	.my-img {
		position: absolute;
		top: 0;
		right: 30px;
		width: 80px;
		height: 80px;
		border-radius: 12px;
	}

	.my-box {
		margin-right: 140px;
		background-color: #79c343;
		border-radius: 10px;
		color: #ffffff;
		position: relative;
	}

	.my-arrow {
		position: absolute;
		top: 20px;
		right: -28px;
		width: 0;
		height: 0;
		font-size: 0;
		border: solid 16px;
		background-color: #f7f7f7;
		border-color: #f7f7f7 #f7f7f7 #f7f7f7 #79c343;
	}
</style>
