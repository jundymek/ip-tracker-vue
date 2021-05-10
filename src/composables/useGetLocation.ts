import { LocationObject } from "@/types/Location";
import { Ref, ref } from "vue";

const locationData = ref<LocationObject | null>(null);
const error = ref("");
const isLoading = ref(false);

export const useGetLocation = (): {
  error: Ref<string>;
  getLocationData: (value: string) => Promise<void>;
  locationData: Ref<LocationObject | null>;
  isLoading: Ref<boolean>;
} => {
  const getLocationData = async (value: string) => {
    isLoading.value = true;
    try {
      const response = await fetch(
        `http://ip-api.com/json/${value}?fields=status,message,country,countryCode,regionName,city,lat,lon,timezone,offset,isp,query`
      );
      const data = await response.json();
      if (data.status !== "fail") {
        locationData.value = data;
        console.log(data);
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

  return { error, getLocationData, locationData, isLoading };
};
