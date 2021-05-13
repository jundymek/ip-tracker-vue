<template>
  <div class="location-wrapper">
    <Location />
    <div v-if="locationInfo !== null" class="map">
      <l-map
        :zoom="zoom"
        :center="[locationInfo.lat, locationInfo.lon]"
        :options="{ zoomControl: false }"
      >
        >
        <l-control-zoom position="bottomleft"></l-control-zoom>
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker
          :lat-lng="[locationInfo.lat, locationInfo.lon]"
          draggable
          @moveend="log('moveend')"
        >
          <l-icon :icon-url="MarkerIcon" :icon-size="MarkerIconSize" />
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  LMap,
  LTileLayer,
  LMarker,
  LIcon,
  LControlZoom,
} from "@vue-leaflet/vue-leaflet";
import Location from "@/components/location/Location.vue";
import "leaflet/dist/leaflet.css";
import { useGetLocation } from "@/composables/useGetLocation";
import MarkerIcon from "@/assets/icon-location.svg";

export default defineComponent({
  components: { LMap, LTileLayer, LMarker, LIcon, Location, LControlZoom },
  setup() {
    const { locationInfo } = useGetLocation();
    const zoom = 12;
    const MarkerIconSize = [46, 56];
    return { locationInfo, zoom, MarkerIcon, MarkerIconSize };
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
  position: relative;
  z-index: 1;
}
</style>
