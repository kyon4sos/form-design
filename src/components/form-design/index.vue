<template>
  <div class="form-design">
    <design-view></design-view>
    <tool></tool>
  </div>
</template>

<script>
import DesignView from "./design-view.vue";
import Tool from "./tool/index.vue";
export default {
  components: {
    DesignView,
    Tool,
  },
};
</script>

<style lang="scss">
.form-design {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}
</style>
