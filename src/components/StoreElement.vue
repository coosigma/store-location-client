<template>
	<div @click="$emit('selected')" :class="{ active: activated }">
		<img :src="getImage(store)" alt="this a store image" />
		<div class="title">
			{{ store.title }}
		</div>
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
div.title {
	margin-left: 10px;
	max-width: 100px;
	overflow-wrap: normal;
}
p {
	word-wrap: break-word;
	word-break: break-all;
	overflow: hidden;
}
img {
	max-width: 80px;
}
div.active {
	transform: scale(1.1);
}
</style>
