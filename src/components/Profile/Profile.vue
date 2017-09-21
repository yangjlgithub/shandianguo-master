<template>
	<div id="Profile">
		<router-view></router-view>
		<ProfileContent></ProfileContent>
		
	</div>
</template>
<script>
import ProfileContent from './ProfileContent'
export default{
	
	components:{
		ProfileContent
	}
}
</script>
<style lang="scss" scoped>
	#Profile{
		position: absolute;
		width: 100%;
		background:#F0F0F0;
		height: 100%;
		margin-bottom:64px;
	}
</style>