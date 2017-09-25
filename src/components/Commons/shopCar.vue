<template>
	<div id="shopCar">
		<div @click="shopCarDetails">
			<icon name="05采购-线性" :scale="2.5" ></icon>
			
			<span v-show="gt">{{showNum}}</span>
		</div>
	</div>
</template>
<script>

export default{
	data(){
		return{
			gt:false,
			shopCarArr:[]
		}
	},
	methods:{
		shopCarDetails(){
			console.log()
			this.$router.push({
				path:'/shopcardetails',
				query:{shopCarArr:(this.shopCarArr)}	
			})
		}
	},
	computed:{
		showNum(){
			var num=0;
			var _this = this;
			// console.log(this.$store.state.carArr)
			var currentArr = _this.$store.state.carArr;
			// console.log(currentArr)
			_this.shopCarArr = currentArr
			for(var obj of currentArr){
				// console.log(obj)
				num+= obj.limitNum
			}
			if(num>=1){
				_this.gt=true
			}else{
				_this.gt=false
			}
			return num

		}
	}
}
</script>
<style lang="scss" scoped>
	#shopCar{
		position: fixed;
		bottom:75px;
		right: 20px;
		div{
			width: 40px;
			height: 40px;
			border-radius: 20px;
			border:1px solid #ccc;
			background: white;
			opacity: 0.8;
			display: flex;
			align-items:center;
			justify-content: center;
			span{
				position:fixed;
				bottom:94px;
				right: 20px;
				width: 16px;
				height: 16px;
				border-radius:8px;
				background:red;
				color: white;
				text-align:center;
				line-height: 16px;
				font-size: 10px;

			}
			
		}
	}
</style>