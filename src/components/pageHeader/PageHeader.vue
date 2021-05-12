<template>
  <header class="wrapper">
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
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { useGetLocation } from "@/composables/useGetLocation";

export default defineComponent({
  setup() {
    const input = ref("");
    const { updateLocationInfo, error } = useGetLocation();
    const handleSubmit = async () => {
      await updateLocationInfo(input.value);
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
  @media (max-width: $desktop) {
    height: 66vh;
  }
}
.title {
  color: #fff;
  font-weight: 500;
  text-transform: capitalize;
  text-align: center;
  margin: 34px 0;
  @media (max-width: $desktop) {
    font-size: 26px;
  }
}

.form {
  width: 80%;
  max-width: 554px;
  position: relative;
  @media (max-width: $desktop) {
    width: 90%;
  }
}

.input-wrapper {
  width: 100%;
  display: flex;
  height: 58px;
}

.input {
  width: 80%;
  height: 58px;
  padding: 0 20px;
  background: #fff;
  border: none;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  font-weight: 500;
  color: $veryDarkGray;
  font-size: 18px;
  flex: 4;
  cursor: pointer;

  &::placeholder {
    font-size: 18px;
    padding: 0 10px;
    font-weight: 500;
    color: $darkGray;
    @media (max-width: $desktop) {
      padding: 0 4px;
      font-size: 14px;
    }
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
  background: $black;
  cursor: pointer;
  transition: 0.2s background-color ease-in;
  &:hover {
    background: $veryDarkGray;
  }
}

.error {
  color: red;
  text-align: center;
  margin: 6px 0;
  @media (max-width: $desktop) {
    margin: 4px 0;
    font-size: 14px;
  }
}
</style>
