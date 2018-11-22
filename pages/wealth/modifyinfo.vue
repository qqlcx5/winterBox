<template>
	<view class="page">
		<view class="header">
			<view class="header-left">
				<text class="icon">&#xe661;</text>
			</view>
			<view class="header-content">
				修改资料
			</view>
			<view class="header-right">
				<text>保存</text>
			</view>
		</view>
		<view class="list">
			<view class="item">
				<text class="item-name">
					昵称
				</text>
				<input class="item-input" type="text" value="" placeholder="大脸猫" />
			</view>
			<view class="item">
				<text class="item-name">
					性别
				</text>
				<radio-group>
					<label class="radio">
						<radio value="0" checked="0" />男
					</label><label class="radio">
						<radio value="1" />女
					</label>
				</radio-group>

			</view>
			<view class="item">
				<text class="item-name">
					生日
				</text>
				<picker class="item-picker" mode="date" start="1970-01-01" end="2019-01-01" @change="dateChange">
					<view> {{date}}</view>
				</picker>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				date: '2018-01-01',
			}
		},
		methods: {
			dateChange(evt) {
				this.date = evt.detail.value;
			},
		}
	}
</script>
<style>
	.header-right text {
		position: absolute;
		right: 30px;
		top: 70px;
		font-size: 28px;
		color: #67ba61;
	}

	.list {
		display: flex;
		flex-direction: column;
	}

	.item {
		height: 110px;
		width: 750px;
		display: flex;
		align-items: center;
		border-bottom: solid 2px #e5e5e5;
	}

	.item-name {
		margin-left: 30px;
		width: 120px;
		color: #999999;
	}

	.item-input,
	.item-picker {
		flex: 1;
		height: 110px;
		line-height: 110px;
	}

	.radio {
		margin-right: 30px;
	}
</style>
