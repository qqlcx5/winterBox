<template>
	<view class="page">
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
		<view class="area" v-for="(item,index) in list" :key="index">
			<div class="area-title">
				{{index}}
			</div>
			<div class="area-item" v-for="(i,keys) in item" :key="keys" @tap="ways('dialog')">
				<view class="area-image">
					<image :src="i.img" mode=""></image>
				</view>
				<view>
					{{i.name}}
				</view>
			</div>
		</view>
		<view class="total">{{list["普通好友"].length}}位联系人</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				list: {
					"官方好友": [{
						"id": 56,
						"spell": "aba",
						"name": "阿坝",
						"img": '../../static/msg1.png'
					}, {
						"id": 57,
						"spell": "akesu",
						"name": "阿克苏",
						"img": '../../static/msg2.png'
					}],
					"普通好友": [{
							"id": 1,
							"spell": "beijing",
							"name": "林真心",
							"img": '../../static/msg3.png'
						},
						{
							"id": 66,
							"spell": "baicheng",
							"name": "李志",
							"img": '../../static/msg1.png'
						}, {
							"id": 66,
							"spell": "baicheng",
							"name": "周正党",
							"img": '../../static/msg2.png'
						}, {
							"id": 66,
							"spell": "baicheng",
							"name": "李志2",
							"img": '../../static/msg3.png'
						}, {
							"id": 66,
							"spell": "baicheng",
							"name": "李志4",
							"img": '../../static/msg1.png'
						}, {
							"id": 22,
							"spell": "baicheng",
							"name": "李志5",
							"img": '../../static/msg2.png'
						}, {
							"id": 33,
							"spell": "baicheng",
							"name": "李志7",
							"img": '../../static/msg1.png'
						}, {
							"id": 44,
							"spell": "baicheng",
							"name": "李志8",
							"img": '../../static/msg3.png'
						}, {
							"id": 55,
							"spell": "baicheng",
							"name": "李志9",
							"img": '../../static/msg1.png'
						},
						{
							"id": 67,
							"spell": "baise",
							"name": "王美丽",
							"img": '../../static/msg3.png'
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

	.area-title {
		height: 84px;
		width: 100%;
		line-height: 84px;
		background: #F7F7F7;
		font-size: 32px;
		color: #666;
		padding-left: 30px;
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
	}

	.area-image image {
		width: 100px;
		height: 100px;
		background-color: #d8d8d8;
		border-radius: 12px;
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
