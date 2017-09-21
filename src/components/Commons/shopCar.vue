<template>
	<div id="shopCar">
		<div>
			<icon name="05采购-线性" :scale="2.5" ></icon>
			
			<span>{{showNum}}</span>
		</div>
	</div>
</template>
<script>

export default{
	computed:{
		showNum(){
			return this.$store.state.goodsNum
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
			// span{
			// 	display: inline-block;
			// 	width: 16px;
			// 	height: 16px;
			// 	border-radius:8px;
			// 	background:red;
			// 	color: white;
			// 	text-align:center;
			// 	line-height: 16px;
			// 	font-size: 10px;
			// 	position:relative;
			// 	left:20px;
			// 	top:4px;
			// }
		}
	}
</style>