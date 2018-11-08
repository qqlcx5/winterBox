<template>
	<view class="">
		<view class="header">
			<view class="header-left">
				<text class="icon">&#xe60a;</text>
			</view>
			<view class="header-content">
				付款给个人
			</view>
			<view class="header-right">
				<!-- <text class="icon">&#xe608;</text> -->
			</view>
		</view>
		<view class="pay">
			<view class="payinfo">
				<image src="../../static/msg1.png" mode=""></image>
				<p>昵称：13800138000</p>
			</view>
			<view class="pay-bill">
				BTC余额230.55
			</view>
			<view class="pay-transfer">
				<image class="pay-transfer-img" src="../../static/B1.png" mode=""></image>
				<input class="pay-transfer-input" type="text" value="" />
				<view class="pay-transfer-text">BTC</view>
			</view>
		</view>
		<view class="fix">
			<view class="fixnum">1</view>
			<view class="fixnum">2</view>
			<view class="fixnum">3</view>
			<view class="fixnum">4</view>
			<view class="fixnum">5</view>
			<view class="fixnum">6</view>
			<view class="fixnum">7</view>
			<view class="fixnum">8</view>
			<view class="fixnum">9</view>
			<view class="fixnum"></view>
			<view class="fixnum">0</view>
			<view class="fixnum">
				<image src="../../static/shanchu_2.png" mode=""></image>
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
	.pay {
		min-height: 300px;
		width: 80%;
		/* background-color: #E8E8E8; */
		border: solid 2px #1a1a1a;
		overflow: hidden;
		border-radius: 12px;
		margin: 60px auto 0;
		display: flex;
		flex-direction: column;
	}

	.payheader image {
		width: 25px;
		height: 25px;
		left: 30px;
		top: 36px;
		position: absolute;
	}

	/* 用户账号信息 */
	.payinfo {
		height: 170px;
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		border-bottom: 4px solid #1a1a1a;
		padding: 20px 0;
		box-sizing: border-box;
	}

	.payinfo image {
		width: 80px;
		height: 80px;
		border-radius: 12px;
		margin-bottom: 10px;
	}

	.payinfo p {
		font-size: 28px;
		color: #1a1a1a;
	}

	.pay-bill {
		height: 100px;
		line-height: 100px;
		width: 100%;
		padding-left: 30px;
		box-sizing: border-box;
		color: #b6b6b6;

	}

	.pay-transfer {
		display: flex;
		height: 120px;
		width: 100%;
		padding-bottom: 40px;
		box-sizing: border-box;
	}

	.pay-transfer-img {
		width: 80px;
		height: 80px;
		margin-left: 30px;
	}

	.pay-transfer-input {
		height: 80px;
		flex: 1;
		text-align: right;
	}

	.pay-transfer-text {
		margin-left: 20px;
		width: 100px;
		height: 80px;
		line-height: 80px;
		font-size: 36px;
		color: #1a1a1a;
	}

	.fix {
		border-top: solid 2px #e3e3e3;
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		min-height: 0;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;

	}

	.fixnum {
		width: 33.33%;
		height: 108px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		font-size: 40px;
		border-right: 2px solid #e3e3e3;
		border-bottom: 2px solid #e3e3e3;
		background-color: #FFFFFF;
	}

	.fixnum:nth-of-type(10) {
		background-color: #e3e3e3;
	}

	.fixnum:nth-of-type(12) {
		background-color: #e3e3e3;
	}

	.fixnum image {
		width: 50px;
		height: 40px;
	}
</style>
