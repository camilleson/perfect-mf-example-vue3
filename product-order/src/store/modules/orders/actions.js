export default {
  addOrder({ commit }, product) {
    commit("addOrder", product);
  },
  removeOrder({ commit }, product) {
    commit("removeOrder", product);
  },
};
