<template>
	<div id="Tabbar">
		<ul>
			<li v-for="(item,index) in tabList" @click="pushTo(item.path,index)" :class="{active:selectedIndex==index}">
				{{item.title}}
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return{
			tabList:[
				{
					path:'/home',
					title:'首页'
				},
				{
					path:'/category',
					title:'分类'
				},
				{
					path:'/order',
					title:'订单'
				},
				{
					path:'/profile',
					title:'我的'
				}
			],
			selectedIndex:0
		}
	},
	methods:{
		pushTo(path,index){
			this.selectedIndex = index
			// console.log(path)
			this.$store.dispatch('UP_DATE_SELECTED_PATH',path)
			this.$router.push(path)
		}
	}
}
</script>
<style lang="scss" scoped>
	#Tabbar{
		background:#F7F4F4;
		height: 64px;
		position: fixed;
		bottom:0;
		right: 0;
		left: 0;
		ul{
			display: flex;
			flex-direction:row;
			li{
				flex:1;
				text-align: center;
				line-height: 64px;
			}
		}
	}
	.active{
		color: red;
	}
</style>