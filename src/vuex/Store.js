import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		selectedPath:''		
	},
	getters: {
		getSelectedPath(state){
			return state.selectedPath;
		},
	},
	mutations: {
		SET_SELECTED_PATH(state,path){
			// console.log("本次存储的路径是"+path);
			state.selectedPath = path;
		}
	},
	actions: {
		UP_DATE_SELECTED_PATH({commit},path){
			commit('SET_SELECTED_PATH',path);
		}
	}
})