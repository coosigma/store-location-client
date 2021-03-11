<template>
	<div class="map" v-if="store">
		<GmapMap
			:center="{ lat: store.latitude, lng: store.longitude }"
			:zoom="15"
			map-type-id="terrain"
			style="width: 100%; height: 500px"
		>
			<GmapMarker
				:key="index"
				v-for="(m, index) in getMarkers()"
				:position="m.position"
				:clickable="true"
				:draggable="true"
				@click="center = m.position"
			/>
		</GmapMap>
	</div>
</template>

<script>
export default {
	name: "StoreMap",
	props: ["store"],
	methods: {
		getMarkers() {
			const marker = {
				position: { lat: this.store.latitude, lng: this.store.longitude },
				title: this.store.title,
				// optimized: false,
			};
			return [marker];
		},
	},
};
</script>
<style scoped>
img {
	max-width: 50%;
}
</style>
