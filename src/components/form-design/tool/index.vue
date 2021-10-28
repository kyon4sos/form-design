<template>
  <div class="tool">
    <h3>Setting</h3>
    <a-form>
      <!-- <a-form-item
        label="width"
        :wrapper-col="{ span: 6 }"
        :label-col="{ span: 4 }"
      >
        <a-input></a-input>
      </a-form-item>
      <a-form-item
        label="width"
        :wrapperCol="{ span: 6 }"
        :labelCol="{ span: 4 }"
      >
        <a-input></a-input>
      </a-form-item> -->
      <a-row :gutter="10">
        <a-col :span="12">
          <a-form-item label="width">
            <a-input @change="hanldeWidth"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="heigth">
            <a-input></a-input>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <h3>Tool</h3>
    <!-- <draggable
      class="tool-box"
      v-model="tools"
      @start="handleStart"
      :group="{ name: 'formdesign', pull: 'clone', put: false }"
    >
      <span class="tool-item" v-for="tool in tools" :key="tool.id">
        {{ tool.name }}
      </span>
    </draggable> -->
    <div class="tool-box">
      <span
        class="tool-item"
        v-for="tool in tools"
        :key="tool.id"
        :id="tool.id"
        draggable="true"
        @dragstart="handleStart(tool)"
        @dragover="handleover"
        @dragenter="handleEnter"
      >
        {{ tool.name }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
// import draggable from "vuedraggable";
export default {
  data() {
    return {
      tools: [
        {
          name: "公司名称",
          id: "1",
          style: {
            left: "10px",
            top: "10px",
          },
        },
        {
          name: "公司地址",
          id: "2",
        },
        {
          name: "电话",
          id: "3",
        },
        {
          name: "联系人",
          id: "4",
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["setElements"]),
    handleEnter() {
      // console.log("enter", e.tartget);
    },
    handledrop() {
      // console.log("drop", e);
    },
    handleover() {
      // console.log("over", e);
    },
    handleStart(tool) {
      console.log(tool);
      // e.dataTransfer.setData("text/plain", e.target.id);
      // console.log("start", e.target.id);
      this.setElements(tool);
    },
  },
  components: {
    // draggable,
  },
};
</script>

<style lang="scss">
.tool {
  width: 400px;
  height: 100%;
  padding: 8px 8px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  .ant-form-item {
    display: flex;
  }
  .tool-box {
    display: flex;
    .tool-item {
      margin-right: 4px;
      padding: 4px 8px;
      color: #333;
      border: 1px solid var(--primaryColor);
      cursor: pointer;
      font-size: 12px;
      &:hover {
        background-color: var(--primaryColor);
        color: #fff;
      }
    }
  }
}
</style>
