<template>
	<div>
		<span>－</span>
		<span>1</span>
		<span @click="change">＋</span>
	</div>
</template>
<script>
export default{
	methods:{
		change(){

		}
	}
}
</script>
<style lang="scss" scoped>
	div{
		display: flex;
		margin-right: 10px;
		border:1px solid #ccc;
		border-radius:2px;
		span{
			flex: 1;
			padding: 2px 5px;
		}
		span:nth-child(1){
			color: #D8D4D4;
		}
		span:nth-child(2){
			color: red;
		}
		span:nth-child(3){
			color: #D8D4D4;
		}
	}
</style>