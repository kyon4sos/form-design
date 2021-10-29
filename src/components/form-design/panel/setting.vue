<template>
  <div class="setting-panel shadow" v-if="visible">
    <h3 class="title border-bottom">Setting</h3>
    <a-form
      :form="form"
      class="p-4"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 14 }"
    >
      <a-form-item label="Label">
        <a-input v-model="display" @change="handleChange"></a-input>
      </a-form-item>
      <a-form-item label="Size">
        <a-input-number v-model="fontSize"></a-input-number>
      </a-form-item>
      <a-form-item label="Weight">
        <a-slider
          v-model="fontWeight"
          :step="100"
          :min="100"
          :max="900"
        ></a-slider>
      </a-form-item>
      <a-form-item>
        <a-button type="primary">ok</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  props: {
    form: Object,
    default: () => {},
    visible: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "label",
    },
    size: {
      type: Number,
      default: 14,
    },
    weight: {
      type: Number,
      default: 400,
    },
  },
  watch: {
    size(newval) {
      this.fontSize = newval;
    },
    weight(newval) {
      this.fontWeight = newval;
    },
    label(newval) {
      this.display = newval;
    },
  },
  mounted() {
    console.log(this.size);
  },
  data() {
    return {
      fontSize: this.size,
      fontWeight: this.weight,
      display: this.label,
    };
  },
  methods: {
    handleChange() {
      console.log({
        size: this.fontSize,
        label: this.display,
        weight: this.fontWeight,
      });
      this.$emit("change", {
        size: this.fontSize,
        label: this.display,
        weight: this.fontWeight,
      });
    },
  },
};
</script>

<style lang="scss">
.setting-panel {
  position: fixed;
  top: 10px;
  left: 410px;
  width: 200px;
  height: 400px;
  background: #fff;

  border: 1px solid #eee;

  .ant-form-item {
    margin-bottom: 4px;
  }
}
</style>