<template>
	<view class="page">
		<view class="header">
			<view class="header-left">
				<text class="icon">&#xe661;</text>
			</view>
			<view class="header-content">
				充币
			</view>
			<view class="header-right">
				<text>充币记录</text>
			</view>
		</view>
		<view class="qrcode-box">
			<image class="qrcode-img" src="../../static/banner2.png" mode=""></image>
			<text class="qrcode-text">请发送者通过二维码扫描支付</text>
		</view>
		<view class="copy-box">
			<text class="code-address">0x685ED8649C7C5558bAC3b628Ed086AF605D0c4B4</text>
			<text class="copy-address">复制地址</text>
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

	.qrcode-box {
		width: 630px;
		height: 550px;
		background-color: #ffffff;
		border: solid 2px #e5e5e5;
		margin: 30px auto 60px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.qrcode-img {
		width: 380px;
		height: 380px;
		margin: 60px 0 30px;
	}

	.qrcode-text {
		font-size: 28px;
		color: #999999;
	}

	.copy-box {
		display: flex;
		flex-direction: column;
	}

	.code-address {
		text-align: center;
		font-size: 24px;
		color: #e97b78;
		margin-bottom: 20px;
	}
	.copy-address{
		text-align: center;
		color: #83afef;
	}
</style>
