import { Ref, ref } from "vue";

export const useGetLocation = (): {
  error: Ref<null>;
  getLocationData: (value: string) => Promise<void>;
  locationData: Ref<null>;
  isLoading: Ref<boolean>;
} => {
  const locationData = ref(null);
  const error = ref(null);
  const isLoading = ref(false);

  const getLocationData = async (value: string) => {
    isLoading.value = true;
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=${
          process.env.VUE_APP_API_KEY
        }${checkInput(value)}`
      );
      const data = await response.json();
      locationData.value = data;
      isLoading.value = false;
      console.log(data);
    } catch (err) {
      isLoading.value = false;
      error.value = err.message;
      console.log(err.message);
    }
  };
  return { error, getLocationData, locationData, isLoading };
};

function checkInput(entry: string) {
  if (entry) {
    if (checkIPAdress(entry)) {
      return `&ipAddress=${entry}`;
    }
    if (checkDomain(entry)) {
      return `&domain=${entry}`;
    }
    throw new Error("Invalid input");
  }
  return "";
}

function checkIPAdress(value: string) {
  if (value) {
    const blocks = value.split(".");
    if (blocks.length === 4) {
      return blocks.every(function (block) {
        return parseInt(block, 10) >= 0 && parseInt(block, 10) <= 255;
      });
    }
    return false;
  }
}

function checkDomain(value: string) {
  if (value) {
    if (/^[a-zA-Z0-9]{1,61}(?:\.[a-zA-Z]{2,})+$/.test(value)) {
      return true;
    }
    return false;
  }
}
