<script type="text/javascript">
	export default {
		filterPrice(val){
			var val = Math.round(val*1)/100; 
			var result = (val.toString()).indexOf(".");
		    if(result != -1) {
		       	return val+'0'
		    } else {
		        return val
		    }
			
		}
	}
</script>