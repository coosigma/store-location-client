<template>
	<div class="container">
		<div class="map">
			<store-map :store="currentStore"></store-map>
		</div>
		<div class="stores">
			<template v-for="(store, index) in stores">
				<store-element
					:store="store"
					:key="index"
					@selected="setCurrentStore(store, index)"
					:activated="index === currentIndex"
				></store-element>
			</template>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import StoreElement from "./StoreElement.vue";
import StoreMap from "./StoreMap.vue";
export default {
	name: "Stores",
	components: { StoreElement, StoreMap },
	computed: mapState(["stores", "keywords", "currentStore", "currentIndex"]),
	created: function() {
		this.$store.dispatch("retrieveStores");
	},
	methods: {
		setCurrentStore: function(store, index) {
			this.$store.dispatch("setCurrentStore", index);
		},
	},
};
</script>

<style scoped>
div {
	margin-top: 20px;
}
div.stores {
	display: flex;
}
</style>
