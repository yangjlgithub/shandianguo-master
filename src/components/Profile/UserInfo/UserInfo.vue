<template>
	<div id="userInfoBox">
		<div class="returnBox">
			<div class="returnIcon" @click="returnAfter">
				<icon name="返回" :scale="1.5" ></icon>
			</div>
			闪电购
		</div>
		<div class="infoList">
			<div class="file">
				<span>头像</span>
				<span>
					<input type="file" id="loadImage" ref="avatar"  @change="getAvatar">
					<img :src="src" alt="">
				</span>
			</div>
			<div class="name" @change="onClickMe">
				<span>昵称</span>
				<input type="text" v-model="msg">
			</div>
		</div>
		
		
	</div>
</template>
<script>	
export default{
	data(){
		return{
			msg:'',
			src:''
		}
	},
	methods:{
		returnAfter(){
			this.$router.go(-1)
		},
		onClickMe(){
			var msg =this.msg
			this.$store.dispatch('updateUsername',msg)
			// console.log(this.$store.state.profile.userName)
		},
		getAvatar(){
			var avatarFile = this.$refs.avatar.files[0];
			var reader = new  FileReader();
			var _this = this;
			reader.onload = function(e){
				_this.src= e.target.result
				_this.$store.dispatch('updateSrc',(_this.src))
			}
			reader.readAsDataURL(avatarFile)

		}

	},
	created(){
		this.msg = this.$route.query.names
		this.src = this.$route.query.src
	}
}
</script>
<style lang="scss" scoped>
#userInfoBox{
	height: 100%;
	z-index:2000;
	width: 100%;
	background: white;
	position: fixed;
	.returnBox{
		height: 50px;
		width: 100%;
		line-height: 50px;
		border-bottom: 1px solid #dbdbdb;
		text-align: center;
		.returnIcon{
			position: fixed;
			left:20px;
			top:0;
		}
	}
	.infoList{
		
		div{
			border-bottom:1px solid #dbdbdb;
		}
		.file{
			display: flex;
			width: 100%;
			justify-content: center;
			align-items: center;
			text-align: center;
			padding:10px 0;
			span:nth-child(1){
				flex:1;
			}
			span:nth-child(2){
				flex:5;
				img{
					width: 40px;
					height: 40px;
					border-radius: 50%;
					display: inline-block;
					float: left;
				}
				input{
					opacity: 0;
				    width: 40px;
				    height:40px;
					position:absolute;
					background:orange;
				}
				
			}
		}	
		.name{
			display: flex;
			width: 100%;
			text-align: center;
			
			span{
				flex:1;
				padding: 10px 0;
			}
			input{
				flex:5;
				width: 100%;
				border:0;
				outline:none;
			}
		}
			
	}
	
}
</style>