import Vue from "vue";
import Vuex from "vuex";
import http from "@/http-common";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		stores: [],
		keywords: "",
		currentIndex: null,
	},
	mutations: {
		updateStores(state, stores) {
			state.stores = stores;
		},
		updateKeywords(state, keywords) {
			state.keywords = keywords;
		},
		setCurrentIndex(state, index) {
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
						commit("setCurrentIndex", 0);
					}
				},
			});
		},
		setKeywords({ commit }, keywords) {
			commit("updateKeywords", keywords);
		},
		setCurrentStore({ commit }, index) {
			commit("setCurrentIndex", index);
		},
	},
	getters: {
		searchedStores: (state, getters) => {
			const stores = state.stores.filter((store) => {
				return store.title
					.toLowerCase()
					.includes(getters.keywords.toLowerCase());
			});
			return stores;
		},
		currentStore: (state, getters) => {
			return getters.searchedStores[getters.currentIndex];
		},
		stores: (state) => {
			return state.stores;
		},
		keywords: (state) => {
			return state.keywords;
		},
		currentIndex: (state) => {
			return state.currentIndex;
		},
	},
});
