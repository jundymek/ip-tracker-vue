<template>
  <div v-if="locationInfo" class="wrapper">
    <div class="box">
      <h2 class="title">Ip adress</h2>
      <p class="value">{{ locationInfo.query }}</p>
    </div>
    <div class="box">
      <h2 class="title">Location</h2>
      <p class="value">{{ locationInfo.country }}</p>
    </div>
    <div class="box">
      <h2 class="title">Timezone</h2>
      <p class="value">UTC {{ getUTCTimeDifference }}</p>
    </div>
    <div class="box">
      <h2 class="title">ISP</h2>
      <p class="value">{{ locationInfo.isp }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { useGetLocation } from "@/composables/useGetLocation";
import { computed, defineComponent } from "vue";
import { getUTCTimeDifference } from "./helpers";

export default defineComponent({
  setup() {
    const { updateLocationInfo, locationInfo } = useGetLocation();
    updateLocationInfo();

    return {
      locationInfo,
      getUTCTimeDifference: computed(() =>
        getUTCTimeDifference(locationInfo.value?.offset)
      ),
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 0px 20px;
  background: #fff;
  width: 80%;
  max-width: 1200px;
  height: 170px;
  margin: 0 auto;
  border-radius: 10px;
  z-index: 2;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  @media (max-width: $desktop) {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 0;
    width: 90%;
  }
}

.box {
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  padding: 40px 40px;
  position: relative;
  @media (max-width: $desktop) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
  }
  &:not(:last-child):after {
    position: absolute;
    content: "";
    width: 1px;
    height: 50%;
    background: $darkGray;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    @media (max-width: $desktop) {
      display: none;
    }
  }

  & .title {
    color: $darkGray;
    letter-spacing: 2px;
    font-size: 12px;
    text-transform: uppercase;
    @media (max-width: $desktop) {
      font-size: 10px;
    }
  }
  & .value {
    margin: 0;
    font-size: 28px;
    font-weight: 500;
    @media (max-width: $desktop) {
      font-size: 18px;
    }
  }
}
</style>
