<template>
	<div id="HomeDetails" >
		<!-- <div class="DetailsTop">
			商品详情
			<div class="returnIcon" @click="returnAfter">
				<icon name="返回" :scale="1.5" ></icon>
			</div>
		</div> -->
		<div class="DetailsTop">
			<div class="returnIcon" @click="returnAfter">
				<icon name="返回" :scale="1.5" ></icon>
			</div>
		</div>
		<div class="DetailsBottom">
			<div class="Details">
				<img :src=url(details.bigPicUrl) alt="">
				<div class="inner1">
					<span><a href="">{{details.brand}}</a>&nbsp;{{details.itemName}}</span>
					<span>{{details.property}} / {{details.unit}}</span>
					<span>
						<span class="price">
							¥<a href="">{{details.price | PriceChange}}</a>
						</span>
						<span class="num">
							<div>
								<icon name="显示密码" :scale="2" ></icon>&nbsp;{{details.browseQuantity}}
							</div>
						</span>
					</span>
				</div>
				<div class="inner2">
					<div>
						<img :src=details.shopFavicon alt="">
						<i>营业中</i>
					</div>
					<div>
						<span>{{details.shopName}}</span>
						<span>营业时间:{{details.dayStartTime}}~{{details.dayEndTime}}</span>
						
					</div>
					<span class="right">
						<icon name="箭头 右" :scale="1.5" ></icon>
					</span>
					
				</div>
				<div class="inner3">
					<p>您可能还想买</p>
				</div>

			</div>
			
		</div>
		<div class="footer">
			<span>进店逛逛</span>
			<span>加入购物车</span>
			<span>
				<span>
					<icon name="05采购-线性" :scale="2.5" ></icon>
				</span>
				
			</span>
		</div>
	</div>
</template>
<script>
import priceFliter from '@/components/Commons/priceFilter'
export default{
	data(){
		return{
			details:{}
		}
	},
	methods:{
		url(val){
			var http = 'http://imgsize.52shangou.com/img/'
			var fullUrl = http+val;
			return fullUrl
		},
		returnAfter(){
			this.$router.go(-1)
		}
	},
	created() {
		console.log(this.$route.query.itemId)
	    var id = this.$route.query.itemId;
	    var _this=this;
			this.$http.get(window.apiAddress+'/api/Details?itemId='+id).then((response)=>{
				response=response.data.entry
				_this.details = response
				console.log(_this.details)
		})
 	},
	filters:{
		PriceChange(val){
			return priceFliter.filterPrice(val);
		}
	}
}
</script>
<style lang="scss" scoped>
	#HomeDetails{
		height: 100%;
		z-index:1000;
		width: 100%;
		background: white;
		position: fixed;
		.DetailsTop{
			height: 50px;
			width: 100%;
			z-index: 1000;
			position: fixed;
			top:30px;
			.returnIcon{
				margin-left: 20px;
				height: 30px;
				width: 30px;
				border-radius: 15px;
				background:#A39E9E;
				display: flex;
				justify-content: center;
				align-items:center;
				color: white;
			}
		}
		.DetailsBottom{
			width: 100%;
			position:absolute;
			background: #f6f6f6;
			top:0;
			right: 0;
			bottom:0;
			left: 0;
			margin-bottom: 40px;
			.Details{
				overflow-y: scroll;
				height: 100%;
				width: 100%;
				.inner1{
					background:white;
					display: flex;
					flex-direction: column;
					border-top:0.5px solid #dbdbdb;
					border-bottom:0.5px solid #dbdbdb;
					height: 100px;
					padding: 0 10px;
					span{
						display: flex;
					}
					span:nth-child(1){
						flex:2;
						align-items:center;
						font-size: 16px;
						a{
							color: black;
							font-weight: 550;
						}
					}
					span:nth-child(2){
						flex:1;
						color: #827F7F;
					}
					span:nth-child(3){
						flex:3;
						align-items:center;
						display: flex;
						.price{
							flex:1;
							a{
								color: red;
								font-size: 26px;
							}
						}
						.num{
							flex:1;
							display: inline-block;
							div{
								float: right;
								display: flex;
								align-items:center;
							}
						}
					}
				}
				.inner2{
					margin:10px 0;
					padding:0 10px;
					width:100%;
					height: 80px;
					background:white;
					border-top:0.5px solid #dbdbdb;
					border-bottom:0.5px solid #dbdbdb;
					display: flex;
					div:nth-child(1){
						flex:1;
						padding:15px 0;
						img{
							width:50px;
							height: 50px;
							border-radius:50%;
						}
						i{
							position:relative;
							font-size: 10px;
							bottom:15px;
							color:white;
							background:#FBB60E;
							height: 8px;
							padding:1px 7px;
							border-radius:8px;
							font-style: normal;
						}
					}
					div:nth-child(2){
						height: 100%;
						flex:5;
						display: flex;
						flex-direction:column;
						justify-content: center;
						span:nth-child(1){
							color: black;
							margin-bottom: 2px;
						}
						span:nth-child(2){
							font-size: 12px;
							color: #827F7F;
						}

					}
					span.right{
						line-height: 80px;
					}
				}
				.inner3{
					height: 300px;
					width: 100%;
					background:white;
					border-top:1px solid #dbdbdb;
					border-bottom:1px solid #dbdbdb;
					margin-bottom: 10px;
					p{
						height: 40px;
						width:100%;
						padding-left: 15px;
						line-height: 40px;
						border-bottom:0.5px solid #dbdbdb;
					}
				}
			}
		}
		.footer{
			position:fixed;
			right: 0;
			left: 0;
			bottom:0;
			background:white;
			height: 40px;
			border-top:1px solid #dbdbdb;
			padding: 0 10px;
			display: flex;
			text-align: center;
			align-items:center;
			span:nth-child(1){
				flex:4;
				border:1px solid #F5F704;
				color: #F5F704;
				padding:4px 0;
				border-radius: 3px;
				margin:0 10px;
			}
			span:nth-child(2){
				flex: 4;
				padding:4px 0;
				border-radius: 3px;
				background:yellow;
				color: black;
				border:1px solid yellow;
			}
			span:nth-child(3){
				flex: 2;
				span{
					display: inline-block;
					width: 30px;
					height: 30px;
					border-radius:15px;
					border:1px solid #dbdbdb;
					background:gary;
				}
			}
				
				
		}
	}
</style>