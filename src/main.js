import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as GmapVue from "gmap-vue";

Vue.config.productionTip = false;

Vue.use(GmapVue, {
	load: {
		key: "",
		libraries: "places",
		installComponents: true,
	},
});

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
