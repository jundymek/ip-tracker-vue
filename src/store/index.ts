import { createStore } from "vuex";

export default createStore({
  state: {
    isLoading: false,
    location: {},
  },
  mutations: {
    SET_ISLOADING(state, status) {
      state.isLoading = status;
    },
    SET_LOCATION(state, newLocation) {
      state.location = newLocation;
    },
  },
  actions: {
    getData(context, value) {
      try {
        context.commit("SET_ISLOADING", true);
        fetch(
          `http://ip-api.com/json/${value}?fields=status,message,country,countryCode,regionName,city,lat,lon,timezone,offset,isp,query`
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
