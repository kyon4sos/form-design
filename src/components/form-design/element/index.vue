<template>
  <div :style="styl" v-on="$listeners" :class="active ? 'active' : null">
    <component :is="element" v-bind="$attrs"></component>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  data() {
    return {};
  },
  props: {
    styl: {
      type: Object,
      default: () => {},
    },
    element: {
      type: String,
      default: "name",
    },
    active: {
      type: Boolean,
      default: true,
    },
  },

  methods: {},
};
</script>

<style>
.active {
  background: red;
}
</style>
