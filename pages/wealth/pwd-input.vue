<template>
	<view class="page">
		<view class="header">
			<view class="header-left">
				<text class="icon">&#xe60a;</text>
			</view>
			<view class="header-content">
				设置支付密码
			</view>
			<view class="header-right">
				<!-- <text class="icon">&#xe608;</text> -->
			</view>
		</view>
		<view>
			<view class="input-info">请设置支付密码，用于支付验证</view>
			<view class="input-box">
				<input type="number" password="number" maxlength="1" value="" />
				<input type="number" password="number" maxlength="1" value="" />
				<input type="number" password="number" maxlength="1" value="" />
				<input type="number" password="number" maxlength="1" value="" />
				<input type="number" password="number" maxlength="1" value="" />
				<input type="number" password="number" maxlength="1" value="" />
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
				<!-- <image src="../../static/shanchu_2.png" mode=""></image> -->
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {


		}
	}
</script>
<style>
	.input-info {
		width: 80%;
		height: 100px;
		line-height: 100px;
		font-size: 28px;
		color: #999999;
		margin: 0 auto;
	}

	.input-box {
		width: 80%;
		display: flex;
		margin: 0px auto 0;
	}

	.input-box input {
		width: 16.66%;
		height: 50px;
		padding: 20px 0;
		caret-color: #fff;
		display: flex;
		font-size: 60px;
		outline: none;
		justify-content: center;
		align-items: center;
		text-align: center;
		border: 2px solid #EEEEEE;
	}

	.fix {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		min-height: 0;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;

		border-top: 2px solid #e3e3e3;

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
