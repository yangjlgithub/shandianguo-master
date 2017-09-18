<template>
	<div id="Category">
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
					
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			placeholder:'请输入商品丶品牌名称进行搜索',
			catAllList:[],
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
			}		
		}
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
					console.log(response)
			})
		}
	},
	created(){
		var _this = this
		this.$http.get(window.apiAddress+'/api/CategoryList').then((response)=>{
	    	_this.catAllList = response.data.entry.cats
	    })
	    
	}
}
</script>
<style lang="scss" scoped>
	#Category{
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
			width: 100%;
			margin-bottom: 64px;
			margin-top: 50px;
			display: flex;
			flex-direction: row;
			.AllList{
				width:25%;
				border-right:1px solid #dbdbdb;
				display: flex;
				flex:1;
				flex-direction:column;
				justify-content: center;
				align-items:center;
				overflow: scroll;
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
				background:red;
				display: flex;
				flex:3;
				height: 100px;
			}
		}
	}
</style>




