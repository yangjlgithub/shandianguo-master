<template>
	
		<div id="ProfileContent">
			<div class="userInfo">
				<div class="ImgBox" @click="userInfo">
					<img :src=imgSrc alt="">
				</div>
		
				<span>{{username}}</span>
			</div>
			<div class="settings">
				<div class="banner1">
					<div>
						<icon name="优惠" :scale="2" ></icon>&nbsp;&nbsp;
						我的优惠
					</div>
					|
					<div>
						<icon name="人民币" :scale="2" ></icon>&nbsp;&nbsp;
						我的退款
					</div>
					
				</div>
				<div class="banner2">
					<ul>
						<li>
							<span>
								<icon name="地址" :scale="3" ></icon>
							</span>
							<span>我的地址</span>
						</li>
						<li>
							<span>
								<icon name="意见" :scale="3" ></icon>
							</span>
							<span>意见反馈</span>
						</li>
						<li>
							<span>
								<icon name="粉丝" :scale="3" ></icon>
							</span>
							<span>粉丝专区</span>
						</li>
						<li>
							<span>
								<icon name="商家合作" :scale="3" ></icon>
							</span>
							<span>商家合作</span>
						</li>
					</ul>
					<ul>
						<li>
							<span>
								<icon name="欢迎评分" :scale="3" ></icon>
							</span>
							<span>欢迎评分</span>
						</li>
						<li>
							<span>
								<icon name="疑问帮助" :scale="3" ></icon>
							</span>
							<span>疑问帮助</span>
						</li>
						<li>
							<span>
								<icon name="关于我们" :scale="3" ></icon>
							</span>
							<span>关于我们</span>
						</li>
						<li>
							<span>
								<icon name="设置" :scale="3" ></icon>
							</span>
							<span>设置</span>
						</li>
					</ul>
				</div>
				
			</div>
			<footer>
				联系客服&nbsp;<a href="">400-091-1717</a>
			</footer>
		</div>	
	
		
	
</template>
<script>

export default{
	data(){
		return{
			usernames:'',
			src:''
		}
	},
	computed:{
		username(){
			this.usernames = this.$store.state.profile.userName
			return this.usernames
		},
		imgSrc(){
			this.src = this.$store.state.profile.src
			return this.src
		}
	},
	methods:{
		userInfo(){
			var names = this.usernames
			var srcs = this.src
			this.$router.push({path:'/profile/userInfo',query:{names:names,src:srcs}})
		}
	}
}
</script>
<style lang="scss" scoped>
	#ProfileContent{
		
		.userInfo{
			background: yellow;
			width: 100%;
			padding: 30px 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.ImgBox{
				height: 60px;
				width: 60px;
				border:3px solid #fff;
				border-radius:50%;
				margin-bottom: 10px;
				img{
					height: 60px;
					width: 60px;
					border-radius:50%;
				}
			}
		}
		.settings{
			.banner1{
				display: flex;
				border:1px solid #dbdbdb;
				border-radius:2px;
				width: 80%;
				margin:10px auto;
				padding:10px;
				background:white;
				div{
					flex:1;
					display: flex;
					justify-content: center;
				}
			}
			.banner2{
				border-top:1px solid #dbdbdb;
				width: 100%;
				background: white;
				ul{
					display: flex;
					margin-bottom: 0;
					li{
						flex:1;
						display: flex;
						flex-direction: column;
						align-items:center;
						padding:20px 0;
						border-bottom:1px solid #dbdbdb;
						border-right:1px solid #dbdbdb;
					}
					li:nth-child(4){
						border-right:0;
					}
				}
			}
		}
		footer{
			position:absolute;
			bottom:64px;
			width: 100%;
			text-align: center;
			font-size: 10px;
			color: #999090;
			padding:15px 0;
		}
	}
</style>