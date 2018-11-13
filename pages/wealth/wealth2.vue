<template>
	<view class="page">
		<view class="header-box">
			<view class="Gheader">
				<view class="header-left " @tap="backs">
					<text class="icon">&#xe60a;</text>
				</view>
				<view class="header-content">
					我的资产
				</view>
				<view class="header-right">
					<text class="icon">&#xe608;</text>
				</view>
			</view>


		</view>
		<view class="msg-box">
			<view class="">
				<text class="mgl30 msg-icon mgr20">&#xe652;</text>
			</view>
			<swiper vertical="true" autoplay="true" circular="true" interval="1000">
				<swiper-item v-for=" item in msgList">
					<navigator>{{item.name}}</navigator>
				</swiper-item>
			</swiper>
		</view>
		<view class="list-box">
			<view class="item" v-for="i in 2">
				<view class="item-img">
					<view class="item-img-name">
						<image src="../../static/B2.png"></image>
						<text>CNY（人民币）</text>
					</view>
					<text class="item-img-desc">2855.40</text>
					<view class="item-img-btn">
						<image src="../../static/tibidizhi.png" mode=""></image>
						<text>提币地址</text>
					</view>
				</view>
				<view class="item-icon-box">
					<view class="item-icon">
						<image src="../../static/wealth1.png" mode=""></image>
						<text>转币记录</text>
					</view>
					<view class="item-icon">
						<image src="../../static/wealth2.png" mode=""></image>
						<text>充币记录</text>
					</view>
					<view class="item-icon">
						<image src="../../static/wealth3.png" mode=""></image>
						<text>提币记录</text>
					</view>
					<view class="item-icon">
						<image src="../../static/wealth4.png" mode=""></image>
						<text>充币</text>
					</view>
					<view class="item-icon">
						<image src="../../static/wealth5.png" mode=""></image>
						<text>提币</text>
					</view>
					<view class="item-icon">
						<image src="../../static/wealth6.png" mode=""></image>
						<text>转给好友</text>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>


<script>
	export default {
		data() {
			return {
				msgList: [{
						name: "常见问题解答，你还不知道答案吗？"
					}, {
						name: "CNY（人民币）"
					}, {
						name: "BTC（比特币）"
					}, {
						name: "招商银行 王熊猫 622021410268789"
					}

				]
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
		height: 420px;
		width: 750px;
		background: url('http://pi23ib6iq.bkt.clouddn.com/banner1.png') no-repeat center;
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

	.msg-box {
		flex-wrap: nowrap;
		margin: -40px auto 30px;
		width: 690px;
		height: 80px;
		background-color: #ffffff;
		box-shadow: 0px 0px 8px 0px #e8e8e8;
		border-radius: 10px;
		display: flex;
		align-items: center;
		font-size: 28px;
		color: #666666;

	}

	.msg-icon {
		font-size: 48px;
		color: #deae42;
		font-family: iconfont;
	}

	.msg-box swiper {
		width: 100%;
		height: 80px;
	}

	.msg-box swiper-item {
		line-height: 80px;
	}

	.list-box {
		min-height: 100px;
		width: 750px;
		padding: 0 30px;
		box-sizing: border-box;

	}

	.item {
		width: 690px;
		min-height: 600px;
		display: flex;
		box-shadow: 0px 0px 8px 0px #d9d9d9;
		border-radius: 10px;
		background-color: #fff;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		color: #ffffff;
		margin-bottom: 30px;
	}

	.item-img {
		width: 690px;
		height: 300px;
		background: url('http://pi23ib6iq.bkt.clouddn.com/banner4.png') no-repeat center;
		background-size: cover;
		position: relative;
	}

	.item-img-name {
		display: flex;
		height: 60px;
		align-items: center;
		margin: 40px 0 10px;
	}



	.item-img-name>image {
		width: 60px;
		height: 60px;
		margin: 0 20px 0 40px;
	}

	.item-img-desc {
		font-size: 50px;
		margin-left: 120px;
	}

	.item-img-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 64px;
		width: 232px;
		border-radius: 32px;
		box-sizing: border-box;
		border: solid 2px #ffffff;
		align-items: center;
		margin: 40px 0 0 120px;

	}

	.item-img-btn image {
		width: 40px;
		height: 40px;
		margin-right: 10px;
	}

	.item-icon-box {
		display: flex;
		flex-wrap: wrap;
	}

	.item-icon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #666666;
		width: 210px;
		height: 180px;
		background-color: #ffffff;
		border-radius: 10px;
		margin-top: 20px;
	}

	.item-icon>image {
		width: 60px;
		height: 60px;
		margin-bottom: 20px;
	}
	.item-icon-box .item-icon:nth-of-type(2),
	.item-icon-box .item-icon:nth-of-type(5){
		margin: 20px 30px 0 ;
	}
</style>
