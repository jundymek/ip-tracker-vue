import { LocationObject } from "@/types/Location";
import { computed, Ref, ref } from "vue";

const locationData = ref<LocationObject | null>(null);
const error = ref("");
const isLoading = ref(false);

export const useGetLocation = (): {
  error: Ref<string>;
  updateLocationData: (value: string) => Promise<void>;
  locationData: Ref<LocationObject | null>;
  isLoading: Ref<boolean>;
} => {
  const updateLocationData = async (value: string) => {
    if (isLoading.value) return;
    isLoading.value = true;
    try {
      const response = await fetch(
        `http://ip-api.com/json/${value}?fields=status,message,country,countryCode,regionName,city,lat,lon,timezone,offset,isp,query`
      );
      const data = await response.json();
      if (data.status !== "fail") {
        locationData.value = data;
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
    updateLocationData,
    locationData,
    isLoading: computed(() => isLoading.value),
  };
};
