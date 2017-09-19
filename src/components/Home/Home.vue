<template>
	<div id="Home">
		<router-view></router-view>
		<HomeTop></HomeTop>
		<HomeBottom></HomeBottom>
		<shopCar></shopCar>
		<div class="goTop" :style="scrollObj" @click="goTop" v-show="show">↑</div>
	</div>
</template>
<script>
import HomeTop from './HomeTop'
import HomeBottom from './HomeBottom'
import shopCar from '@/components/Commons/shopCar'
export default{
	components:{HomeTop,HomeBottom,shopCar},
	data(){
		return{
			scrollObj:{},
			show:true
		}
	},
	methods: {
		handleScroll(){
			var sHeight = window.screen.height;
			var fHeight=sHeight/2;
			 if (window.scrollY>=fHeight) {
				 this.scrollObj = {
				 	display:'block'
				 }
			 }else{
			 	this.scrollObj = {
				 }
			 }
		},
		goTop(){
			document.body.scrollTop=0;
		}
	},
	created(){
		window.addEventListener('scroll', this.handleScroll)
	},
}
</script>
<style lang="scss" scoped>
	#Home{
		overflow: scroll;
		margin-bottom:64px;
		.goTop{
			position: fixed;
			bottom:125px;
			right: 20px;
			width: 40px;
			height: 40px;
			border-radius: 20px;
			border:1px solid #ccc;
			background: white;
			opacity: 0.8;
			text-align:center;
			line-height: 40px;
			display: none;
		}
	}
	
</style>