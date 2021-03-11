import Vue from "vue";
import Vuex from "vuex";
import http from "@/http-common";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		stores: [],
		keywords: "",
		currentStore: null,
		currentIndex: null,
	},
	mutations: {
		updateStores(state, stores) {
			state.stores = stores;
		},
		updateKeywords(state, keywords) {
			state.keywords = keywords;
		},
		setCurrentStore(state, index) {
			state.currentStore = state.stores[index];
			state.currentIndex = index;
		},
	},
	actions: {
		async retrieveStores({ commit }) {
			return http.get("stores", {
				transformResponse: (data) => {
					const res = JSON.parse(data);
					const stores = res.stores;
					commit("updateStores", stores);
					if (!this.currentStore && stores.length > 0) {
						commit("setCurrentStore", 0);
					}
				},
			});
		},
		setCurrentStore({ commit }, index) {
			commit("setCurrentStore", index);
		},
	},
	modules: {},
});
