<template>
	<div id="shopCarDetails">
		<div class="DetailsTop">
			购物车
			<div class="returnIcon" @click="returnAfter">
				<icon name="返回" :scale="1.5" ></icon>
			</div>
		</div>
		<div class="DetailsBottom">
			<div class="Details">
				<div class="adr">地址</div>
				<div class="shopId">
					<input type="radio">
					闪电购(永丰8区店)
				</div>
				<ul>
					<li v-for="item in shopDetailsArr">
						<input type="radio">
						<img :src=item.imgUrl alt="">
						<div>
							<span>
								<a href="">{{item.itemBrand}}</a>
								{{item.itemName}}
							</span>
							<span>{{item.property}}</span>
							<span>
								<span>¥{{item.itemPrice |PriceChange}}</span>
								<span class="num">
									<span>－</span>
									<span>
										<input style="width:10px;" type="text" :value="item.limitNum" v-model="item.limitNum">
									</span>
									<span>＋</span>
								</span>
							</span>
						</div>
					</li>
				</ul>
				<div class="sendOut">
					<span>该店铺{{Fmoney}}元起送,还差{{Dvalue |PriceChange}}元</span>
					<span>
						去凑单
						<div class="moreIcon">
							<icon name="更多" :scale="1.5" ></icon>
						</div>
					</span>
				</div>
				<div class="total">

					<span>合计:<a href="">¥{{totalMoney |PriceChange}}</a>&nbsp;&nbsp;<a href="">(不含配送费)</a></span>
					<span>去结算</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import priceFliter from '@/components/Commons/priceFilter'
export default{
	data(){
		return{
			shopDetailsArr:[],
			Fmoney:"29"
		}
	},
	methods:{
		returnAfter(){
			this.$router.go(-1)
		}
	},
	computed:{
		totalMoney(){
			// console.log(this.shopDetailsArr)
			console.log(1);
			var money=0
			for(var obj of this.shopDetailsArr){
				money+= obj.limitNum*obj.itemPrice;
			}
			return money
		},
		Dvalue(){
			var Dmoney=0;
			for(var Obj of this.shopDetailsArr){
				Dmoney+= Obj.limitNum*Obj.itemPrice
			}
			var FMONEY = (this.Fmoney)*100-Dmoney
			return FMONEY
			// var Dmoney=0;
			// var Fmoney=2900;
			// for(var obj of this.shopDetailsArr){
			// 	Dmoney+= obj.limitNum*obj.itemPrice;
			// }
			// console.log(Dmoney)
		}
	},
	activated(){
		
		var carArr = this.$route.query.shopCarArr;
		for(var obj of carArr){
			if(obj.limitNum==0){
				carArr.pop(obj)
			}
		}
		this.shopDetailsArr =carArr
		// console.log(this.shopDetailsArr)
	},
	filters:{
		PriceChange(val){
			return priceFliter.filterPrice(val);
		}
	}
}
</script>
<style lang="scss" scoped>
	#shopCarDetails{
		position: fixed;
		width:100%;
		height: 100%;
		background: white;
		z-index: 1000;
		.DetailsTop{
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
		.DetailsBottom{
			width: 100%;
			position:absolute;
			// background: #f6f6f6;
			top:50px;
			right: 0;
			bottom:0;
			left: 0;
			.Details{
				overflow-y: scroll;
				height: 100%;
				width: 100%;
				.adr{
					padding: 15px 20px;
					width: 100%;
					background:#f6f6f6;
					border-bottom:1px solid #dbdbdb;
				}
				.shopId{
					padding:10px 5px;
					width: 100%;
					border-bottom:1px solid #dbdbdb;
				}
				ul{
					width: 100%;
					margin-bottom: 0;
					li{
						display: flex;
						padding:5px 10px;
						width: 100%;
						align-items:center;
						border-bottom:1px solid #dbdbdb;
						input{
							
						}
						img{
						
							height: 70px;
							width: 70px;
							margin:10px;
						}
						div{
							width:100%;
							display: flex;
							flex-direction: column;
							span:nth-child(1){
								margin-bottom: 5px;
								a{
									color: black;
									font-weight: 600;
								}
							}
							span:nth-child(2){
								font-size: 10px;
							}
							span:nth-child(3){

								span{
									float: left;
								}
								.num{
									float: right;
								
								}
							}
						}
					}

				}
				.sendOut{
					display: flex;
					padding:10px 10px 10px 30px;
					background:#ccc;
					span:nth-child(1){
						flex:2;
					}
					span:nth-child(2){
						flex:1;
						display: flex;
						color: red;
					}
				}
				.total{
					position:absolute;
					bottom:0;
					right: 0;
					left: 0;
					
					border-top:1px solid #dbdbdb;
					display: flex;
					span:nth-child(1){
						flex:3;
						padding:15px 0 15px 5px;
						a:nth-child(1){
							color: red;
						}
						a:nth-child(2){
							color: #dbdbdb;
							font-size: 10px;
						}

					}
					span:nth-child(2){
						flex:1;
						background:#B2A5A5;
						padding:15px 0;
						text-align:center;
						color: white;
					}
				}
			}
		}
	}
</style>