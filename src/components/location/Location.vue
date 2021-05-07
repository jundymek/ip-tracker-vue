<template>
  <div class="wrapper">
    <div class="box">
      <h2 class="title">Ip adress</h2>
      <p class="value">192.212.174.191</p>
    </div>
    <div class="box">
      <h2 class="title">Location</h2>
      <p class="value">Brooklyn, NY 10001</p>
    </div>
    <div class="box">
      <h2 class="title">Timezone</h2>
      <p class="value">UTC -05:00</p>
    </div>
    <div class="box">
      <h2 class="title">ISP</h2>
      <p class="value">SpaceX Starlink</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup(props) {
    console.log(props);
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
