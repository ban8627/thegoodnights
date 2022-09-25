import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    shopList: [],
  },
  actions: {
    fetchShop({ commit }) {
      axios
        .get("./data/thegoodnight.json")
        .then((res) => {
          console.log(res.data.data);
          commit("SHOP_LIST", res.data.data);
        })
        .catch((err) => console.log(err));
    },
  },
  mutations: {
    SHOP_LIST(state, payload) {
      state.shopList = payload;
    },
  },
  getters: {
    getShopList(state) {
      return state.shopList;
    },
  },
  modules: {},
});
