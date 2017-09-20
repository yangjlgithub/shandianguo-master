<template>
	<div id="CategoryContent">
		<div class="input-group search">
		  <span class="input-group-addon" id="basic-addon1">
		  	<span class="glyphicon glyphicon-search"></span>
		  </span>
		  <input type="text" class="form-control" :placeholder=placeholder aria-describedby="basic-addon1">
		</div>
		<div class="content">
			<ul class="AllList">
				<li v-for="(item,index) in catAllList" @click="pushre(index)" :class="{active:currentIndex==index}">
					{{item.cat.name}}
				</li>
			</ul>
			<div class="showGoods">
				<div class="goodsTop">
					<div @click="inner1">
						全部分类
						<i :class="{'fa fa-angle-down':isDown,'fa fa-angle-up':isUp}"></i>	
					</div>
					<div @click="inner1">
						综合排序
						<i :class="{'fa fa-angle-down':isDown,'fa fa-angle-up':isUp}"></i>	
					</div>
					<div>
						3
					</div>
					
				</div>
				<ul class="goodsContent">
					<li v-for="item in catsList" @click="goodsCategoryDetails(item.id)">
						<img :src='url(item.bigPicUrl)' alt="">
						<span class="drinkName">
							{{item.brand}}&nbsp;{{item.itemName}}
						</span>
						<span class="Box">{{item.property}}/{{item.unit}}</span>
						<span class="one">
							<span class="price">¥{{item.price |PriceChange}}</span>
							<goodsChange class="two"></goodsChange>
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import goodsChange from '@/components/Commons/goodsChange'
import priceFliter from '@/components/Commons/priceFilter'
export default{
	data(){
		return{
			placeholder:'请输入商品丶品牌名称进行搜索',
			catAllList:[],
			catsList:[],
			currentIndex:0,
			apiAdr:[
				{
					childCatIds:'0',
					parentCatId:'0'
				},
				{
					childCatIds:'38%2C394%2C395',
					parentCatId:'150'
					
				},
				{
					childCatIds:'37',
					parentCatId:'36'
					
				},
				{
					childCatIds:'30',
					parentCatId:'27'
				},
				{
					childCatIds:'54',
					parentCatId:'154'
				},
				{
					childCatIds:'71%2C391',
					parentCatId:'70'
				},
				{
					childCatIds:'121%2C126',
					parentCatId:'114'
				},
				{
					childCatIds:'55%2C58',
					parentCatId:'53'
				},
				{
					childCatIds:'215',
					parentCatId:'183'
				},
				{
					childCatIds:'96%2C98',
					parentCatId:'95'
				},
				{
					childCatIds:'51',
					parentCatId:'153'
				},
				{
					childCatIds:'27615%2C27614',
					parentCatId:'27602'
				},
				{
					childCatIds:'19890',
					parentCatId:'19880'
				}
			],
			adrList:{
				childCatIds:'',
				parentCatId:''
			},
			isDown:true,
			isUp:false
				
		}
	},
	components:{
		goodsChange
	},
	methods:{
		pushre(index){
			this.currentIndex=index;
			var one = this.apiAdr
			for (var seIndex in one){
				if(seIndex==index){
					this.adrList.parentCatId=one[seIndex].parentCatId
					this.adrList.childCatIds=one[seIndex].childCatIds
				}	
			}
			
			var _this = this;
			this.$http.get(window.apiAddress+'/api/ContentList?childCatIds='+_this.adrList.childCatIds+'&parentCatId='+_this.adrList.parentCatId).then((response)=>{
					var data = [],
					data=response.data.entry
					// console.log(data)
					var mergeList=[]
					for(var i in data){
						// console.log(_this.catsList[i].catItemList)
						console.log(data[i])
						
						var one =data[i].catItemList
						for(var j in one){
							mergeList.push(one[j])
							// console.log(mergeList)
						}
						
					}
					_this.catsList = mergeList
					 console.log(_this.catsList)
			})
		},
		inner1(){	
			this.isDown = !(this.isDown)
			this.isUp = !(this.isUp)
		},
		url(val){
			var http = 'http://imgsize.52shangou.com/img/'
			var fullUrl = http+val;
			return fullUrl
		},
		goodsCategoryDetails(id){
			console.log(id)
			this.$router.push({path:'/category/categoryDetails',query: { itemId: id }})
			
		}
	},
	created(){
		var _this = this
		this.$http.get(window.apiAddress+'/api/CategoryList').then((response)=>{
	    	_this.catAllList = response.data.entry.cats
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
	#CategoryContent{
		.search{
			padding: 8px;
			background:#f9f9f9;
			position: fixed;
			border-bottom:1px solid #dbdbdb;
			top:0;
			right: 0;
			left: 0;
			span{
				background: white;
			}
			input{

			}
		}
		.content{
			background: #f6f6f6;
			display: flex;
			position: absolute;
			top:51px;
			bottom: 64px;
			right: 0;
			left: 0;
			.AllList{
				flex:1;
				overflow-y:scroll;
				height:100%;
				border-right:1px solid #dbdbdb;
				display: flex;
				flex-direction:column;
				align-items:center;
				li{
					padding:4px 6px;
					margin: 10px 0;
				}
				.active{
					border:1px solid #dbdbdb;
					border-radius:33px;
					color: white;
					background:#ffa900;
				}
			}
			.showGoods{
				
				flex:4;
				margin-bottom: 64px;
				.goodsTop{
					display: flex;
					flex-direction:row;
					width: 100%;
					height: 45px;
					border-bottom:0.5px solid #dbdbdb;
					// position:fixed;
					// z-index:666;
					div{
						display: flex;
						justify-content: center;
						align-items:center;
					}
					div:nth-child(1){
						flex:5;
					}
					div:nth-child(2){
						flex:5;
					}
					div:nth-child(3){
						flex:2;
					}
					i{
						display: inline-block;
						width:10px;
						height: 10px;
						margin-left:10px;
						color:#cccccc;
					}
				}
				.goodsContent{
					width:100%;
					height: 100%;
					overflow-y:scroll;

					li{
						width:48%;
						float: left;
						border:1px solid #dbdbdb;
						margin:2px;
						background:white;
						img{
							width:141.61px;
							height: 141.61px;
						}
						span{
							display: flex;
							font-size:12px;	
							margin-bottom: 3px;
							padding:0 5px;

						}
						span.drinkName{
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 1;
							overflow: hidden;
							font-weight: 500;
							height: 17px;
							
						}
						span.Box{
							color: #827F7F;
							font-size: 10px;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 1;
							overflow: hidden;
							height: 17px;
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
	}
</style>




