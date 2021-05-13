import { LocationObject } from "@/types/Location";
import { computed, Ref, ref } from "vue";

const locationInfo = ref<LocationObject | null>(null);
const error = ref("");
const isLoading = ref(false);

export const useGetLocation = (): {
  error: Ref<string>;
  updateLocationInfo: (value?: string | undefined) => Promise<void>;
  locationInfo: Ref<LocationObject | null>;
  isLoading: Ref<boolean>;
} => {
  const updateLocationInfo = async (value: string | undefined) => {
    if (isLoading.value) return;
    if (!value) {
      value = "";
    }
    isLoading.value = true;
    try {
      const response = await fetch(
        `http://ip-api.com/json/${value}?fields=status,message,country,countryCode,regionName,city,lat,lon,getUTCTimeDifference,offset,isp,query`
      );
      const data = await response.json();
      if (data.status !== "fail") {
        locationInfo.value = data;
      } else {
        throw new Error(data.message);
      }
      isLoading.value = false;
    } catch (err) {
      isLoading.value = false;
      error.value = err.message;
      console.log(err.message);
    }
  };

  return {
    error,
    updateLocationInfo,
    locationInfo,
    isLoading: computed(() => isLoading.value),
  };
};
