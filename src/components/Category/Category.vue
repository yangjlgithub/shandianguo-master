<template>

	<div id="Category">
		<router-view></router-view>
		<CategoryContent></CategoryContent>
	</div>
</template>
<script>

import CategoryContent from './CategoryContent'
export default{
	components:{
		CategoryContent
	}
}
</script>
<style lang="scss" scoped>
	#Category{
		
	}
</style>




