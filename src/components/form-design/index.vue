<template>
  <div class="form-design">
    <tool></tool>
    <design-view></design-view>
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
  .border {
    border: 1px solid #999;
  }
  .border-bottom {
    border-bottom: 1px solid #eee;
  }
  .title {
    padding: 4px 4px;
  }
  .p-4 {
    padding: 4px 4px;
  }
  .shadow {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  }
}
</style>
