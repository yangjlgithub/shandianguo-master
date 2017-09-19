<template>
	<div id="HomeTop">
		<img :src=oneHourBanner.imgUrl alt="">
		<div>
			<ul>
				<li v-for="(itemTool,index) in tool" @click='topDetail(tool,index)'>
					
					<img :src=itemTool.imgUrl alt="">
					
					<span>{{itemTool.text}}</span>
				</li>
			</ul>
		</div>
		
	</div>
</template>
<script>
export default{
	data(){
		return{
			oneHourBanner:{},
			tool:{}	
		}
	},
	methods:{
		topDetail(tool,index){
			for(var i in tool){
				// console.log(tool[index])
				var j = tool[index].text
				// console.log(j)
				// console.log(tool[i].text)
				if(tool[i].text==j){
					if(j=='热销排行'){
						this.$router.push('/home/hot')
					}
					if(j=='全部分类'){
						this.$router.push('/category')
					}
				}
				
			}

		}
	},
	created(){
		var _this = this;
		this.$http.get('/api/HomeTop').then((response)=>{
			response=response.data
			if(response.errno==0){
				response = response.data.extra.adv
		    	var four = response.oneHourBanner;
		    	_this.oneHourBanner = four['4']
		    	_this.tool = response.tool  	
			}
		})

	    // this.$http.get(window.apiAddress+'/api/home').then((response)=>{
	    	// response = response.data.extra.adv
	    	// var four = response.oneHourBanner;
	    	// _this.oneHourBanner = four['4']
	    	// _this.tool = response.tool
	    	// console.log(_this.tool)	
	    // })
	}
}
</script>
<style lang="scss" scoped>
	#HomeTop{
		width: 100%;
		div{
			display: flex;
			ul{
			display: flex;
			flex-direction:row;
			flex:1;
				li{
					text-align: center;
					display: flex;
					flex-direction: column;
					align-items:center;
					img{
						width: 50%;
						padding: 10px 0;
					}
					span{
						font-size: 12px;
						padding-bottom:6px;
					}
				}

			}
		}
		
	}
</style>