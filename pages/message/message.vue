<template>
	<view class="page">
		<view class="header-fix">
			<view class="header">
				<view class="header-left">
					<text class="icon">&#xe60a;</text>
				</view>
				<view class="header-content">
					好友
				</view>
				<view class="header-right">
					<text class="icon">&#xe608;</text>
				</view>
			</view>
		</view>
		<view class="area">
			<div class="area-item" v-for="(i,key) in list['普通好友']" :key="key" @tap="ways('dialog')">
				<view class="area-image">
					<image :src="i.img" mode=""></image>
					<view class="area-badge"></view>
				</view>
				<view class="area-msg">
					<view class="area-title">
						<text>{{i.name}}</text>
						<text class="area-time">{{i.time}}</text>
					</view>
					
					<text class="area-desc">{{i.spell}}</text>
				</view>
			</div>
			<view class="total">{{list["普通好友"].length}}位联系人</view>
		</view>
		
	</view>
</template>


<script>
	export default {
		data() {
			return {
				list: {
					"普通好友": [{
							"id": 1,
							"spell": "点击可查看所有系统通知消息",
							"name": "系统通知",
							"img": '../../static/msg4.png',
							'time':'2018-10-14'
						},
						{
							"id": 66,
							"spell": "请问有什么可以帮您吗？",
							"name": "平台客服",
							"img": '../../static/msg1.png',
							'time':'2018-10-19'
						}, {
							"id": 66,
							"spell": "我给你转账了1CNY你转账了1CNY你转账了1CNY你转账了1CNY 订单号14067102",
							"name": "周正党",
							"img": '../../static/msg2.png',
							'time':'2018-10-11'
						}, {
							"id": 66,
							"spell": "我给你转账了1CNY 订单号14067102",
							"name": "王美丽",
							"img": '../../static/msg3.png',
							'time':'2018-10-15'
						}, {
							"id": 66,
							"spell": "我给你转账了1CNY 订单号14067102",
							"name": "李志4",
							"img": '../../static/msg1.png',
							'time':'2018-10-15'
						}, {
							"id": 22,
							"spell": "我给你转账了1CNY 订单号14067102",
							"name": "15960233265",
							"img": '../../static/msg2.png',
							'time':'2018-10-18'
						}, {
							"id": 33,
							"spell": "我给你转账了1CNY 订单号14067102",
							"name": "15960233225",
							"img": '../../static/msg1.png',
							'time':'2018-10-12'
						}, {
							"id": 44,
							"spell": "我给你转账了1CNY 订单号14067102",
							"name": "周撒旦",
							"img": '../../static/msg3.png',
							'time':'2018-10-11'
						}, {
							"id": 55,
							"spell": "我给你转账了1CNY 订单号14067102",
							"name": "周正党",
							"img": '../../static/msg1.png',
							'time':'2018-10-12'
						},
						{
							"id": 67,
							"spell": "我给你转账了1CNY 订单号14067102",
							"name": "王美丽",
							"img": '../../static/msg3.png',
							'time':'2018-10-16'
						}
					]
				}
			};
		}
	}
</script>

<style>
	.area {
		min-height: 200px;
		width: 100%;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
	}

	.area-item {
		display: flex;
		align-items: center;
		height: 134px;
		width: 100%;
		overflow: hidden;
		border-bottom: 2px solid #F1F1F1;
		font-size: 28px;
		color: #6c6c6c;
	}

	.area-image {
		height: 134px;
		width: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.area-image image {
		width: 100px;
		height: 100px;
		background-color: #d8d8d8;
		border-radius: 12px;
		
	}
	.area-badge{
		position: absolute;
		top: 10px;
		right: 15px;
		width: 20px;
		height: 20px;
		display: block;
		border-radius: 50%;
		background-color: #e24344;
	}

	.area-msg {
		height: 134px;
		width: 600px;
		display: flex;
		flex-direction: column;
		padding: 22px 30px 20px 0;
		box-sizing: border-box;
		
	}

	.area-title {
		display: flex;
		justify-content: space-between;
		color: #1a1a1a;
		margin-bottom: 10px;
		font-size: 32px;
	}
	.area-time{
		font-size: 24px;
		color: #999999;
	}

	.area-desc {
		font-size: 28px;
		color: #999999;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.total {
		width: 750px;
		height: 68px;
		background-color: #ffffff;
		text-align: center;
		line-height: 68px;
		color: #999999;
	}
</style>
