import { createStore } from "vuex";
import orders from "./modules/orders/store";

// Create a new store instance.
const store = createStore({
  modules: {
    orders,
  },
});

export default store;
