<template>
  <div v-if="locationData !== null" class="map">
    <l-map
      v-model="zoom"
      v-model:zoom="zoom"
      :center="[locationData.lat, locationData.lon]"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { useGetLocation } from "@/composables/useGetLocation";

export default defineComponent({
  components: { LMap, LTileLayer },
  setup() {
    const { locationData } = useGetLocation();
    const zoom = 12;
    return { locationData, zoom };
  },
});
</script>

<style lang="scss">
.map {
  width: 100%;
  height: 100vh;
  margin-top: -120px;
  position: relative;
  z-index: -1;
}
</style>
