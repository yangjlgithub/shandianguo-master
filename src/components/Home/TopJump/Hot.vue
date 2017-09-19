<template>
	<div id="hot">
		<div class="hotTop">
			热销排行
			<div class="returnIcon" @click="returnAfter">
				<icon name="返回" :scale="1.5" ></icon>
			</div>
		</div>
		<div class="HotBox">
			<ul class="HotList">
				<li v-for="item in HotLists">
					<div class="imgBox">
						<img :src='url(item.bigPicUrl)' alt="">

					</div>
					<div class="messages">
						<span><a href="">{{item.brand}}</a>&nbsp;{{item.itemName}}</span>
						<span>{{item.property}}/{{item.unit}}</span>
						<span>
							<span class="price">
								¥{{item.price |PriceChange}}
							</span>
							<goodsChange class="two"></goodsChange>
						</span>
					</div>
					
				</li>
			</ul>
		</div>
		
	</div>
</template>
<script>
import goodsChange from '@/components/Commons/goodsChange'
import priceFliter from '@/components/Commons/priceFilter'
export default{
	methods:{
		returnAfter(){
			this.$router.go(-1)
		},
		url(val){
			var http = 'http://imgsize.52shangou.com/img/'
			var fullUrl = http+val;
			return fullUrl
		}
	},
	created(){
		var _this = this
		this.$http.get(window.apiAddress+'/api/Hot').then((response)=>{
	    	response = response.data.entry.itemList
	    	_this.HotLists =response
	    })
	    
	},
	data(){
		return{
			HotLists:{}
		}
	},
	filters:{
		PriceChange(val){
			return priceFliter.filterPrice(val);
		}
	},
	components:{
		goodsChange
	}
}
</script>
<style lang="scss" scoped>
	#hot{
		height: 100%;
		z-index:1000;
		width: 100%;
		background: white;
		position: fixed;
		.hotTop{
			text-align: center;
			height: 50px;
			width: 100%;
			line-height: 50px;
			border-bottom: 1px solid #dbdbdb;
			.returnIcon{
				position: fixed;
				left:20px;
				top:0;
			}
		}
		.HotBox{
			width: 100%;
			position:absolute;
			top:51px;
			right: 0;
			bottom:0;
			left: 0;
		}
		.HotList{
			width: 100%;
			overflow-y: scroll;
			height: 100%;
			li{
				width:100%;
				height: 20%;
				border-bottom:1px solid #dbdbdb;
				display: flex;
				
				flex-direction: row;
				.imgBox{
					flex:2;
					display: flex;
					align-items:center;
				}
				.messages{
					flex: 5;
					display: flex;
					flex-direction:column;
					padding-left: 10px;
					span:nth-child(1){
						padding:10px 0;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
						overflow: hidden;
						a{
							text-decoration: none;
							color: black;
							font-weight: 600;
						}
					}
					span:nth-child(2){
						color: #827F7F;
						font-size: 10px;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
						overflow: hidden;
					}
					span:nth-child(3){
						padding:12px 0;
						font-size: 10px;
						display: flex;
						.price{
							flex:1;
							color: red;
						}
						.two{
							flex: 1;
						}
					}
				}
			}
		}
	}
</style>