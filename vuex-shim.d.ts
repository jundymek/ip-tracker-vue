import { Store } from "vuex";
import { LocationObject } from "./src/types/Location";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    isLoading: boolean;
    location: LocationObject | undefined;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
