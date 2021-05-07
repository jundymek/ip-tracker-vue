<template>
  <Input />
  <Location />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Input from "@/components/input/Input.vue";
import Location from "@/components/location/Location.vue";

export default defineComponent({
  name: "App",
  components: { Input, Location },
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
  /* background: url("../src/assets/pattern-bg.png");
  background-repeat: no-repeat;
  background-size: cover; */
  background: $darkGray;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
