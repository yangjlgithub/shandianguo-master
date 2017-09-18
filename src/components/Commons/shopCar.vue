<template>
	<div id="shopCar">
		<div>
			<span>1</span>
		</div>
	</div>
</template>
<script>

export default{
	
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
			span{
				display: inline-block;
				width: 16px;
				height: 16px;
				border-radius:8px;
				background:red;
				color: white;
				text-align:center;
				line-height: 16px;
				font-size: 10px;
				position:relative;
				left:20px;
				top:4px;
			}
		}
	}
</style>