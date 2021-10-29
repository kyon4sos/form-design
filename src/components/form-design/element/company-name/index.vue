<template>
  <div
    class="company-name flex align-center"
    v-click-outside.stop="onClickOutside"
  >
    <a-input
      type="text"
      v-if="edit"
      @pressEnter="handleEnter"
      v-model="editLabel"
    ></a-input>
    <label class="pr-8" v-else @dblclick="handleDoubClick">{{
      editLabel + ":"
    }}</label>
    <input
      class="outline border-bottom pl-4 flex-1"
      type="text"
      placeholder="请输入公司名称"
    />
  </div>
</template>

<script>
export default {
  name: "company-name",
  data() {
    return {
      edit: false,
      editLabel: this.label,
    };
  },
  watch: {
    label(newval) {
      console.log("comp", newval);
      this.editLabel = newval;
    },
  },
  props: {
    label: {
      type: String,
      default: "TO",
    },
  },
  methods: {
    onClickOutside() {
      // if (this.edit) {
      //   this.edit = false;
      //   this.editLabel = this.label;
      // }
      // console.log(this.label);
    },

    handleDoubClick() {
      this.edit = true;
      console.log("double click");
    },
    handleEnter() {
      this.edit = false;
      console.log("enter");
      this.$emit("enter", this.editLabel);
    },
  },
};
</script>

<style>
.border-bottom {
  border: none;
  /* border-bottom: 1px solid #999; */
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #c5c5c5;
  font-size: 16px;
}
.pl-4 {
  padding-left: 4px;
}
</style>
