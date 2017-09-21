<template>
	<div id="HomeBottom">
		<div class="BottomContent">
			<div v-for="bouItem in boutiqueCategory" class="contentList">
				<img :src=bouItem.imgUrl alt="">
				<ul class="dataBox">
					<li v-for="item in bouItem.itemList">
						<img :src=item.imgUrl alt=""  @click="goodsDetails(item.itemId)">
						<span class="drinkName">
							<a href="">{{item.itemBrand}}</a>&nbsp;{{item.itemName}}
						</span>
						<span class="Box">{{item.property}}</span>
						<span>
							<span class="price">¥{{item.itemPrice | PriceChange}}</span>
							<goodsChange></goodsChange>
						</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="likes">
			<div class="topText">{{recommendItem.topText}}</div>
			<ul>
				<li class="likeBox" v-for="item in recommendItem.itemList" @click="goodsDetails(item.itemId)">
					<img :src=item.imgUrl alt="">
					<span class="drinkName">
						<a href="">{{item.itemBrand}}</a>&nbsp;{{item.itemName}}
					</span>
					<span class="Box">{{item.property}}</span>
					<span class="one">
						<span class="price">¥{{item.itemPrice | PriceChange}}</span>
						<goodsChange class="two"></goodsChange>
					</span>
				</li>			
			</ul>
		</div>
	</div>
</template>
<script>
import goodsChange from '@/components/Commons/goodsChange'
import priceFliter from '@/components/Commons/priceFilter'

export default{
	data(){
		return{
			boutiqueCategory:{},
			recommendItem:{}
		}
	},
	methods:{
		goodsDetails(id){
			
			this.$router.push({path:'/home/homeDetails',query: { itemId: id }})
			
		}
	},
	components:{
		goodsChange
	},
	created(){
		var _this = this;
		this.$http.get('/api/HomeBottom').then((response)=>{
			response=response.data;
			if(response.errno==0){
				response = response.data.extra.adv;
				_this.boutiqueCategory = response.boutiqueCategory
				_this.recommendItem = response.recommendItem['0']
			}
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
	#HomeBottom{
		.BottomContent{
			.contentList{
				overflow-x:hidden;
				.dataBox{
					display: flex;
					flex-direction: row;
					overflow-x: scroll;
					padding:0 5px;
					width: 100%;

					li{
						
						margin:0 2px;
						padding-bottom:5px;
						img{
							border-right: 0.5px solid #F4F0F0;
							width:100%;
							height: 130px;
						}
						span{
							display: flex;
							width: 146px;
							font-size:12px;	
							margin-bottom: 2px;
							span.price{
								color: red;
							}
							
						}
						.drinkName{
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
						span.Box{
							color: #827F7F;
							font-size: 10px;
						}
					}
				}
			}
		
		}
		.likes{
			width: 100%;
			background:#F7F7F7;
			padding:10px;
			display: flex;
			flex-direction: column;
			.topText{
				text-align: center;
				font-size: 14px;
				color: #B1ABAB;
				margin-bottom: 5px;
			}
			ul{
				.likeBox{
					width: 48%;
					margin:3px;
					float: left;
					display: flex;
					flex-direction: column;
					background:white;
					img{
						width: 170.39px;
						height: 170.39px;
					}
					span{
						display: flex;
						font-size:14px;	
						margin-bottom: 6px;
						padding:0 5px;
						
					}
					span.drinkName{
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
						overflow: hidden;
						height: 20px;
						a{
							text-decoration: none;
							color: black;
							font-weight: 600;
						}
					}
					span.Box{
						color: #827F7F;
						font-size: 10px;
					}
					span.one{
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