<template>
  <div class="location-wrapper">
    <Location />
    <div v-if="locationData !== null" class="map">
      <l-map
        v-model="zoom"
        v-model:zoom="zoom"
        :center="[locationData.lat, locationData.lon]"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker
          :lat-lng="[locationData.lat, locationData.lon]"
          draggable
          @moveend="log('moveend')"
        >
          <l-tooltip> lol </l-tooltip>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
import Location from "@/components/location/Location.vue";
import "leaflet/dist/leaflet.css";
import { useGetLocation } from "@/composables/useGetLocation";

export default defineComponent({
  components: { LMap, LTileLayer, LMarker, LTooltip, Location },
  setup() {
    const { locationData } = useGetLocation();
    const zoom = 12;
    return { locationData, zoom };
  },
});
</script>

<style lang="scss" scoped>
.location-wrapper {
  display: block;
  height: 100%;
  position: relative;
}
.map {
  width: 100%;
  height: 100%;
  /* min-height: 100vh; */
  position: relative;
  z-index: -1;
}
</style>
