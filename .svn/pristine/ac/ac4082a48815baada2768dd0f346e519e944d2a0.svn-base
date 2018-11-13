<template>
	<view class="page">
		<view class="header-box">
			<view class="Gheader">
				<view class="header-left " @tap="backs">
					<text class="icon">&#xe60a;</text>
				</view>
				<view class="header-content">
					我的
				</view>
				<view class="header-right">
					<text class="icon">&#xe608;</text>
				</view>
			</view>


		</view>
		<view class="qrcode-user">
			<view>
				<image class="user-img" src="../../static/msg1.png" mode=""></image>
			</view>
			<view class="user-info">
				<text class="user-name">昵称：王雄猫</text>
				<text class="user-desc">登录名：13800138000</text>
			</view>
		</view>
		<view class="list-box">
			<view class="item">
				<text class="item-icon">&#xe631;</text>
				<text class="item-text">修改资料</text>
				<text class="item-icon">&#xe602;</text>
			</view>
			<view class="item">
				<text class="item-icon">&#xe620;</text>
				<text class="item-text">绑定手机（已验证）</text>
				<text class="item-icon">&#xe602;</text>
			</view>
			<view class="item">
				<text class="item-icon">&#xe804;</text>
				<text class="item-text">绑定邮箱（已验证）</text>
				<text class="item-icon">&#xe602;</text>
			</view>
			<view class="item">
				<text class="item-icon">&#xe658;</text>
				<text class="item-text">设置支付密码（已设置）</text>
				<text class="item-icon">&#xe602;</text>
			</view>
			<view class="item">
				<text class="item-icon">&#xe609;</text>
				<text class="item-text">API接口能力</text>
				<text class="item-icon">&#xe602;</text>
			</view>
			<view class="item">
				<text class="item-icon">&#xe601;</text>
				<text class="item-text">关于我们</text>
				<text class="item-icon">&#xe602;</text>
			</view>
		</view>
		<view class="mgt80 mgb-btn">
			<view class="btn">
			退出登录
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

	.header-box {
		height: 360px;
		width: 750px;
		background: url('http://pgir7fsv6.bkt.clouddn.com/banner2.png') no-repeat center;
		background-size: cover;
	}

	/* 修改的header */
	.Gheader {
		height: 128px;
		width: 100%;
		display: flex;
		padding-top: 40px;
		box-sizing: border-box;
		padding-top: 40px;
		align-items: center;
		position: relative;
	}

	.qrcode-user {
		display: flex;
		margin: -40px auto 30px;
		width: 690px;
		height: 200px;
		background-color: #ffffff;
		box-shadow: 0px 0px 8px 0px #e8e8e8;
		border-radius: 10px;
		display: flex;
		align-items: center;
	}

	.user-img {
		width: 140px;
		height: 140px;
		background-color: #d8d8d8;
		border-radius: 10px;
		margin: 0 30px 0 60px;
	}

	.user-info {
		display: flex;
		flex-direction: column;
		font-size: 36px;
	}

	.user-name {
		margin: 10px 0 20px;
		color: #333333;
	}

	.user-desc {
		font-size: 32px;
		color: #999999;
	}

	.list-box {
		min-height: 100px;
		width: 750px;
		background-color: #fff;
	}

	.item {
		width: 750px;
		height: 120px;
		align-items: center;
		padding: 0 30px;
		box-sizing: border-box;
		display: flex;
		border-bottom: solid 2px #F7F7F7;
	}

	.item-icon {
		font-size: 40px;
		color: #666666;
		font-family: iconfont;
	}

	.item-text {
		margin-left: 20px;
		flex: 1;
		color: #666666;
	}
	.mgb-btn{
		margin-bottom: 80px;
	}
</style>
