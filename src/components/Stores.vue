<template>
	<div class="container">
		<div class="map">
			<store-map :store="currentStore"></store-map>
		</div>
		<div class="stores">
			<div class="search-bar">
				<search-element></search-element>
			</div>
			<div class="list">
				<template v-for="(store, index) in searchedStores">
					<store-element
						:store="store"
						:key="index"
						@selected="setCurrentStore(index)"
						:activated="index === currentIndex"
					></store-element>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import StoreElement from "./StoreElement.vue";
import SearchElement from "./SearchElement.vue";
import StoreMap from "./StoreMap.vue";
export default {
	name: "Stores",
	components: { StoreElement, StoreMap, SearchElement },
	computed: mapGetters([
		"searchedStores",
		"keywords",
		"currentStore",
		"currentIndex",
	]),
	created: function() {
		this.$store.dispatch("retrieveStores");
	},
	methods: {
		setCurrentStore: function(index) {
			this.$store.dispatch("setCurrentStore", index);
		},
	},
};
</script>

<style scoped>
div {
	margin-top: 20px;
}
div.list {
	display: flex;
}
</style>
