<template>
	<view class="page">
		<view class="login">
			<view class="login-item">
				<image src="../../static/login3.png" mode=""></image>
				<input type="text" placeholder-class="placeholder" placeholder="输入手机号或邮箱地址">
			</view>
			<view class="login-item">
				<image src="../../static/login4.png" mode=""></image>
				<input type="text" placeholder-class="placeholder" placeholder="输入验证码">
				<text class="login-item-code">获取验证码</text>
			</view>
			<view class="login-btn">登录</view>
			<text class="login-desc">游客模式 </text>
			<view class="login-note">登录即表示同意《用户服务协议》</view>
		</view>
	</view>
</template>

<script>
	export default {
		data: {

		},
		methods: {
			gotoDetail() {
				uni.navigateTo({
					url: "mallMessage"
				})
			},
		}
	}
</script>

<style>
	.page {
		width: 750px;
		height: 100vh;
		background: url('https://s1.ax1x.com/2018/11/13/iO4xy9.png') no-repeat center;
		background-size: cover;
		overflow: hidden;
		padding-top: 46vh;
		box-sizing: border-box;
	}



	.login {
		min-height: 200px;
		width: 750px;
		display: flex;
		flex-direction: column;
		padding: 0 60px;
		box-sizing: border-box;

	}

	.login-item {
		position: relative;
	}

	.login image {
		width: 50px;
		height: 50px;
		position: absolute;
		top: 25px;
		left: 30px;
	}

	.login input {
		width: 100%;
		height: 100px;
		border-radius: 56px;
		margin-bottom: 60px;
		padding-left: 100px;
		background: none;
		box-sizing: border-box;
		border: solid 2px #999999;
		color: #999999;
	}

	.login-item-code {
		position: absolute;
		right: 30px;
		top: 30px;
		
		color: #3d83da;
	}

	.placeholder {
		color: #b6b6b6;
	}

	.login-btn {
		width: 100%;
		height: 100px;
		line-height: 100px;
		margin-top: 20px;
		text-align: center;
		color: #fff;
		background-color: rgba(59, 59, 59, 0.6);
		border-radius: 48px;
	}

	.login-desc {
		margin-top: 30px;
		text-align: right;
		color: #999999;
	}

	.login-note {
		position: fixed;
		bottom: 40px;
		left: 0;
		width: 750px;
		height: 40px;
		display: flex;
		justify-content: center;
		font-size: 26px;
		color: #ffffff;
	}
</style>
