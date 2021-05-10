<template>
  <div class="wrapper">
    <div class="box">
      <h2 class="title">Ip adress</h2>
      <p class="value">{{ state.location.query }}</p>
    </div>
    <div class="box">
      <h2 class="title">Location</h2>
      <p class="value">{{ state.location.country }}</p>
    </div>
    <div class="box">
      <h2 class="title">Timezone</h2>
      <p class="value">UTC -05:00</p>
    </div>
    <div class="box">
      <h2 class="title">ISP</h2>
      <p class="value">{{ state.location.isp }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { useGetLocation } from "@/composables/useGetLocation";
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const { getLocationData, locationData } = useGetLocation();
    const store = useStore();
    const { state } = store;

    onMounted(async () => {
      await getLocationData("");
      store.commit("SET_LOCATION", locationData.value);
    });
    return { state };
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
  height: 170px;
  margin: 0 auto;
  margin-top: -50px;
  overflow: hidden;
  border-radius: 10px;
}

.box {
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  padding: 40px 40px;
  position: relative;
  &:not(:last-child):after {
    position: absolute;
    content: "";
    width: 1px;
    height: 50%;
    background: $darkGray;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  & .title {
    color: $darkGray;
    letter-spacing: 2px;
    font-size: 12px;
    text-transform: uppercase;
  }
  & .value {
    margin: 0;
    font-size: 28px;
    font-weight: 500;
  }
}
</style>
