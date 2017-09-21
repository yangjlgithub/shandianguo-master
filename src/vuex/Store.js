import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import ProfileModule from '@/components/Profile/ProfileStore'
export default new Vuex.Store({
	state: {
		selectedPath:'',
		goodsNum:''		
	},
	getters: {
		getSelectedPath(state){
			return state.selectedPath;
		},
		getGoodsNum(state){
			return state.goodsNum;
		}
	},
	mutations: {
		SET_SELECTED_PATH(state,path){
			// console.log("本次存储的路径是"+path);
			state.selectedPath = path;
		},
		SET_GOODS_NUM(state,num){
			state.goodsNum = num;
		}
	},
	actions: {
		UP_DATE_SELECTED_PATH({commit},path){
			commit('SET_SELECTED_PATH',path);
		},
		UP_DATE_GOODS_NUM({commit},num){
			commit('SET_GOODS_NUM',num);
		}
	},
	modules:{
		profile:ProfileModule
	}
})