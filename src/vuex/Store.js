import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import ProfileModule from '@/components/Profile/ProfileStore'
export default new Vuex.Store({
	state: {
		selectedPath:'',
		goodsNum:'',
		carArr:[]		
	},
	getters: {
		getSelectedPath(state){
			return state.selectedPath;
		},
		getGoodsNum(state){
			return state.goodsNum;
		},
		getCarArr(state){
			return state.carArr;
		}
	},
	mutations: {
		SET_SELECTED_PATH(state,path){
			// console.log("本次存储的路径是"+path);
			state.selectedPath = path;
		},
		SET_GOODS_NUM(state,num){
			state.goodsNum = num;
		},
		SET_CAR_ARR(state,arr){
			state.carArr=arr;
		}
	},
	actions: {
		UP_DATE_SELECTED_PATH({commit},path){
			commit('SET_SELECTED_PATH',path);
		},
		UP_DATE_GOODS_NUM({commit},num){
			commit('SET_GOODS_NUM',num);
		},
		UP_DATE_CAR_ARR({commit},arr){
			commit('SET_CAR_ARR',arr)
		}
	},
	modules:{
		profile:ProfileModule
	}
})