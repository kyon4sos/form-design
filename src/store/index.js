import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    elements: [],
  },
  mutations: {
    setElements(state, data) {
      state.elements.push(data);
    },
  },
  actions: {},
  modules: {},
});
