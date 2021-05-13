import { LocationObject } from "@/types/Location";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  isLoading: boolean;
  location: LocationObject | undefined;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    isLoading: false,
    location: undefined,
  },
  mutations: {
    SET_ISLOADING(state: { isLoading: boolean }, status: boolean) {
      state.isLoading = status;
    },
    SET_LOCATION(state, newLocation) {
      state.location = newLocation;
    },
  },
  actions: {
    getLocationIngo(context, value) {
      try {
        context.commit("SET_ISLOADING", true);
        fetch(
          `http://ip-api.com/json/${value}?fields=status,message,country,countryCode,regionName,city,lat,lon,getUTCTimeDifference,offset,isp,query`
        )
          .then((data) => data.json())
          .then((res) => {
            console.log(res);
            context.commit("SET_ISLOADING", false);
            context.commit("SET_LOCATION", res);
            return;
          });
      } catch (err) {
        context.commit("SET_ISLOADING", false);
        console.log(err.message);
      }
    },
  },
  modules: {},
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
