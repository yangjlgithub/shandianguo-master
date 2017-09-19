<template>
  <div id="app">
  	<router-view></router-view>
    <Tabbar></Tabbar>
    
  </div>
</template>

<script>
import resetCss from '@/assets/reset.css'
import Tabbar from '@/components/Commons/Tabbar'
import BSCss from '@/assets/dist/css/bootstrap.min.css'
import fontAwesome from '@/assets/font-awesome-4.7.0/css/font-awesome.min.css'
export default {
  components:{Tabbar}
}
</script>

<style>
#app {
	
}
</style>
