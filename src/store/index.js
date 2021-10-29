import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current: {
      size: 14,
      weight: 400,
      label: "label",
    },
    showPanel: false,
    elements: [],
    paperWidth: 800,
    paperHeight: 600,
  },
  mutations: {
    setShowPanel(state, data) {
      state.showPanel = data;
    },
    setCurrent(state, data) {
      console.log("set cur", data);
      state.current = { ...data };
    },
    setElements(state, data) {
      state.elements.push(data);
    },
    setPaperWidth(state, width) {
      state.paperWidth = width;
    },
    setPaperHeight(state, width) {
      state.paperHeight = width;
    },
  },
  actions: {},
  modules: {},
});
