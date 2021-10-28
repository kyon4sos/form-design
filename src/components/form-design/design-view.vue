<template>
  <div class="design-view">
    <defaul-template></defaul-template>
  </div>
</template>

<script>
import DefaulTemplate from "./template/default.vue";
export default {
  components: {
    DefaulTemplate,
  },
};
</script>

<style lang="scss">
.design-view {
  min-width: 600px;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  border: 1px solid #f5f5f5;
  border-width: 0 1px;
  background-image: linear-gradient(
      45deg,
      #f5f5f5 25%,
      transparent 0,
      transparent 75%,
      #f5f5f5 0
    ),
    linear-gradient(
      45deg,
      #f5f5f5 25%,
      transparent 0,
      transparent 75%,
      #f5f5f5 0
    );
  background-position: 0 0, 13px 13px;
  background-size: 26px 26px;
}
</style>
