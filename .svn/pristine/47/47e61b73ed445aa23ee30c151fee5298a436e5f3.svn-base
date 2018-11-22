<template>
	<view class="page">
		<view class="header">
			<view class="header-left">
				<text class="icon">&#xe661;</text>
			</view>
			<view class="header-content">
				添加提币地址
			</view>
			<view class="header-right">
				<text>添加新地址</text>
			</view>
		</view>
		<view class="list" >
			<radio-group @change="radioChange">
			<block v-for="(item,index) in radioItems" :key="index">
			
				<view class="item">
					<view class="item-address">
						<view class="item-index">1</view>招商银行 王熊猫 622021410268789
					</view>
					<view class="item-check">
						<view class="item-check-left">
							<radio :id="item.name" :value="item.name" :checked="item.checked"></radio>
							<label :for="item.name">
								<text>默认地址</text>
							</label>
						</view>
						<view class="item-check-right">
							<text class="gIcon edit-icon">&#xe631;</text>编辑
							<text class="gIcon">&#xe600;</text>删除
						</view>
					</view>
				</view>
				</block>
			</radio-group>
			
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				radioItems: [{
						name: 'USA',
						value: '美国'
					},
					{
						name: 'CHN',
						value: '中国',
						checked: 'true'
					}
				],
			}
		},
		methods: {
			radioChange: function(e) {
				var checked = e.target.value
				var changed = {}
				for (var i = 0; i < this.radioItems.length; i++) {
					if (checked.indexOf(this.radioItems[i].name) !== -1) {
						changed['radioItems[' + i + '].checked'] = true
					} else {
						changed['radioItems[' + i + '].checked'] = false
					}
				}
			},
		}
	}
</script>
<style>
	.page {
		width: 750px;
		height: 100vh;
		background-color: #F7F7F7;
	}

	.header-right text {
		position: absolute;
		right: 30px;
		top: 70px;
		font-size: 28px;
		color: #ffffff;
	}

	.list {
		width: 750px;
		min-height: 100px;
		display: flex;
		flex-direction: column;
	}

	.item {
		display: flex;
		flex-direction: column;
		min-height: 220px;
		background-color: #fff;
		width: 750px;
		margin-bottom: 20px;
	}

	.item-address {
		height: 110px;
		width: 750px;
		display: flex;
		align-items: center;
		border-bottom: 2px solid #f6f6f6;
		color: #333333;
		font-size: 28px;
	}

	.item-index {
		width: 50px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background-color: #b6b6b6;
		color: #FFFFFF;
		margin: 0 30px;
		border-radius: 6px;
	}

	.item-check {
		height: 110px;
		width: 750px;
		display: flex;
		align-items: center;
		border-bottom: 2px solid #f6f6f6;
		color: #999999;
		font-size: 28px;
		padding: 0 30px;
		box-sizing: border-box;
	}

	.item-check-left {
		flex: 1;
		height: 110px;
		line-height: 110px;
		display: flex;
		align-items: center;
	}

	.edit-icon {
		margin-right: 10px;
		font-size: 42px;
	}
</style>
