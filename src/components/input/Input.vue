<template>
  <div class="wrapper">
    <h1 class="title">IP adress tracker</h1>
    <form action="" class="form" @submit.prevent="handleSubmit">
      <div class="input-wrapper">
        <input
          type="text"
          name="ipInput"
          v-model="input"
          id="ipInput"
          placeholder="Search for any IP address or domain"
          class="input"
          required
        />
        <button class="button">
          <img src="@/assets/icon-arrow.svg" alt="Arrow" />
        </button>
      </div>
      <p v-if="error" class="error">*{{ error }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { useGetLocation } from "@/composables/useGetLocation";

export default defineComponent({
  setup() {
    const input = ref("");
    const { getLocationData, error } = useGetLocation();
    const handleSubmit = async () => {
      await getLocationData(input.value);
    };
    return { input, handleSubmit, error };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("../../assets/pattern-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
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

.error {
  color: red;
  text-align: center;
}
</style>
