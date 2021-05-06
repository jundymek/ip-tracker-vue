<template>
  <div class="wrapper">
    <h1 class="title">IP adress tracker</h1>
    <form action="" class="form">
      <div class="input-wrapper">
        <input
          type="text"
          name="ipInput"
          v-model="input"
          id="ipInput"
          placeholder="Search for any IP address or domain"
          class="input"
        />
        <button class="button">
          <img src="@/assets/icon-arrow.svg" alt="Arrow" />
        </button>
      </div>
    </form>
    {{ input }}
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    const input = ref("");
    return { input };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  color: #fff;
  font-weight: 500;
  text-transform: capitalize;
  text-align: center;
}

.form {
  width: 80%;
  max-width: 590px;
  position: relative;
}

.input-wrapper {
  width: 100%;
  display: flex;
  height: 60px;
}

.input {
  width: 80%;
  height: 60px;
  padding: 0 20px;
  background: #fff;
  border: none;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  font-weight: 500;
  color: $darkGray;
  font-size: 18px;
  flex: 4;

  &::placeholder {
    font-size: 18px;
    padding: 0 20px;
    font-weight: 500;
    color: $darkGray;
  }
}

.button {
  margin: 0;
  padding: 0;
  border: none;
  width: 60px;
  height: 100%;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background: #000;
  cursor: pointer;
}
</style>
