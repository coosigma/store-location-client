<template>
	<div @click="$emit('selected')" :class="{ active: activated }">
		<img :src="getImage(store)" alt="this a store image" />
		<p>{{ store.title }}</p>
	</div>
</template>

<script>
export default {
	name: "StoreElement",
	props: ["store", "activated"],
	methods: {
		getImage(store) {
			return `http://127.0.0.1/images/${store.image}`;
		},
	},
};
</script>
<style scoped>
img {
	max-width: 50%;
}
div.active {
	transform: scale(1.1);
}
</style>
