<template>
  <div class="tool shadow">
    <h3 class="title border-bottom">Paper</h3>
    <a-form class="p-4">
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
      <a-row :gutter="4">
        <a-col :span="12">
          <a-form-item label="width">
            <a-input v-model="width" @change="handleWidth"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="height">
            <a-input v-model="height" @change="handleHeight"></a-input>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <h3 class="title border-bottom">Tool</h3>
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
    <div class="tool-box p-4">
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
      width: 800,
      height: 600,
      tools: [
        {
          name: "公司名称",
          id: "1",
          element: "company-name",
          size: 20,
          weight: 400,
          label: "公司名称1",
          style: {
            width: "300px",
          },
          pos: {
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
    ...mapMutations([
      "setElements",
      "setPaperWidth",
      "setPaperHeight",
      "setCurrent",
      "setShowPanel",
    ]),
    handleWidth() {
      this.setPaperWidth(this.width);
    },
    handleHeight() {
      this.setPaperHeight(this.height);
    },
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
      this.setShowPanel(true);
      this.setCurrent(tool);
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
  min-width: 400px;
  height: 100%;
  background-color: #fff;
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
