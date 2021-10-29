import CompanyComp from "./index.vue";

export default {
  install: (vue) => [vue.component(CompanyComp.name, CompanyComp)],
};
