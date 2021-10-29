import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "@/assets/css/index.css";
import "@/assets/css/v2.css";
Vue.config.productionTip = false;
import * as vClickOutside from "v-click-outside-x";
import "./form-design";
Vue.use(Antd);
Vue.use(vClickOutside);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
