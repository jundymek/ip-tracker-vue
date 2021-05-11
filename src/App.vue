<template>
  <div class="box-wrapper">
    <Input />
    <Map />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Input from "@/components/input/Input.vue";

import Map from "./components/map/Map.vue";

export default defineComponent({
  name: "App",
  components: { Input, Map },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

body {
  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: $darkGray;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
}

.box-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
</style>
