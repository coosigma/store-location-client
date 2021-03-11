import Vue from "vue";
import VueRouter from "vue-router";
import Stores from "@/components/Stores.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Stores",
		component: Stores,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
