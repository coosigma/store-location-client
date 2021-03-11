<template>
	<div class="search-bar">
		<div class="info">
			<p>{{ countStores() }}</p>
		</div>
		<div class="search">
			<input
				class="search-input"
				id="search-input"
				type="text"
				@keyup="handleKeyUp"
			/>
			<button type="button" @click="onInput">search</button>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "SearchElement",
	props: [],
	computed: mapGetters(["searchedStores", "keywords"]),
	methods: {
		countStores() {
			return `${this.searchedStores.length} Stores`;
		},
		onInput() {
			const input = document.getElementById("search-input");
			this.$store.dispatch("setKeywords", input.value);
		},
		handleKeyUp(event) {
			if (event.key === "Enter") {
				this.onInput();
			}
		},
	},
};
</script>
<style scoped>
div.search-bar {
	display: flex;
}
div.search {
	margin-left: auto;
}
div.active {
	transform: scale(1.1);
}
</style>
