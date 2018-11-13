<template>
	<view class="page">
		<view class="header">
			<view class="header-left">
				<text class="icon">&#xe661;</text>
			</view>
			<view class="header-content">
				给好友转账
			</view>
			<view class="header-right">
			</view>
		</view>
		<view class="carry-box">
			<view>
				<text class="carry-item-tips">必须是手机号，转账后将自动通知好友上线领取！</text>
				<view class="carry-item">
					<text class="carry-item-text">手机号码：</text>
					<input class="carry-item-input" type="text" placeholder="请输入11位手机号码" value="" />
				</view>
				<view class="carry-item">
					<text class="carry-item-text">金额：</text>
					<input class="carry-item-input align-input" type="text" placeholder="0.00" value="" />
					<text class="carry-item-put">元</text>
				</view>

			</view>
			<view>
				<textarea class="carry-textarea" placeholder="恭喜发财，大吉大利！"></textarea>
			</view>
			<view class="mgt80">
				<view class="btn">
					确认提现
				</view>
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
	.header-right text {
		position: absolute;
		right: 30px;
		top: 70px;
		font-size: 28px;
		color: #ffffff;
	}

	.carry-box {
		min-height: 660px;
		width: 750px;
		padding: 30px 30px 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;

	}

	.carry-item {
		width: 690px;
		height: 96px;
		border-radius: 10px;
		border: solid 2px #b6b6b6;
		display: flex;
		align-items: center;
		margin-bottom: 30px;
	}

	.carry-item-text {
		width: 220px;
		padding-left: 30px;
		box-sizing: border-box;
	}

	.carry-item-input {
		flex: 1;
		height: 96px;
		margin-right: 40px;
	}

	.align-input {
		text-align: right;
	}

	.carry-item-put {
		width: 40px;
		height: 96px;
		line-height: 96px;
		color: #262626;
		font-size: 36px;
		margin-right: 10px;
	}

	.carry-item-tips {
		font-size: 26px;
		color: #999999;
		margin-bottom: 30px;
		display: block;
	}

	.carry-textarea {
		width: 690px;
		height: 172px;
		background-color: #ffffff;
		border-radius: 10px;
		border: solid 2px #b6b6b6;
		padding: 30px;
		box-sizing: border-box;
		color: #b6b6b6;
	}
</style>
