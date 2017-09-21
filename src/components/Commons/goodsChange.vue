<template>
	<div>
		<span @click="changeMin">－</span>
		<span>{{num}}</span>
		<span @click="changeMax">＋</span>
	</div>
</template>
<script>
export default{
	data(){
		return{
			num:''
		}
	},
	methods:{
		changeMax(){
			this.num++
			console.log(this.num)
			this.$store.dispatch('UP_DATE_GOODS_NUM',(this.num))
		},
		changeMin(){
			if(this.num>0){
				this.num--
			}
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