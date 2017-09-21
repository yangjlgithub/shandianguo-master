export default{
	state:{
		userName:'',
		src:'http://old.cicphoto.com/newcicsite/syxy/tj/201408/W020140827418494159324.jpg'
	},
	getters:{
		getUserName(name){
			return state.userName
		},
		getSrc(src){
			return state.src
		}
	},
	mutations:{
		setUsername(state,name){
			state.userName = name
		},
		setSrc(state,src){
			state.src = src
		}
	},
	actions:{
		updateUsername({commit},name){
			commit('setUsername',name);
		},
		updateSrc({commit},src){
			commit('setSrc',src);
		}
	}
}