<template>
  <!-- @dragover="handleDragover" -->
  <!-- @drop="handleDrop" -->
  <div
    class="default-template"
    ref="container"
    :style="{ width: paperWidth + 'px', height: paperHeight + 'px' }"
    @mouseup="handleMouseUp"
    @mousemove="handleMouseMove"
  >
    <!-- @dragstart="(e) => handleStart(ele, e)" -->
    <!-- @dragend="(e) => handleEnd(ele, e)" -->
    <Element
      class="element-item"
      :class="ele.className"
      v-for="ele in elements"
      :key="ele.id"
      :styl="ele.style"
      :active.sync="ele.active"
      :label="ele.label"
      :element="ele.element"
      @mousedown.stop="handleMouseDown(ele, $event)"
    >
      {{ ele.name }}
    </Element>
    <!-- <VueDragResize
      v-for="(ele, index) in elements"
      :key="index"
      :w="ele.width"
      :h="ele.height"
      :x="ele.left"
      :y="ele.top"
      :parentW="listWidth"
      :parentH="listHeight"
      :axis="ele.axis"
      :isActive="ele.active"
      :minw="ele.minw"
      :minh="ele.minh"
      :isDraggable="ele.draggable"
      :isResizable="ele.resizable"
      :parentLimitation="ele.parentLim"
      :snapToGrid="ele.snapToGrid"
      :aspectRatio="ele.aspectRatio"
      :z="ele.zIndex"
      :contentClass="ele.class"
      v-on:activated="activateEv(index)"
      v-on:deactivated="deactivateEv(index)"
      v-on:dragging="changePosition($event, index)"
      v-on:resizing="changeSize($event, index)"
    >
      <div class="filler" :style="{ backgroundColor: ele.color }"></div>
    </VueDragResize> -->
    <!-- <draggable
      class="template"
      v-model="elements"
      @update="handleStart"
      @start="handleStart"
      :sort="false"
      group="formdesign"
      ghost-class="ghost"
    >
      <div
        class="element-item"
        v-for="ele in elements"
        :key="ele.id"
        :style="{ top: ele.top, left: ele.left }"
      >
        {{ ele.name }}
      </div>
    </draggable> -->
    <setting-panel
      :visible.sync="showPanel"
      :size="current.size"
      :label="current.label"
      :weight="current.weight"
      @change="handleChange"
    ></setting-panel>
  </div>
</template>

<script>
// import draggable from "vuedraggable";
import SettingPanel from "../panel/setting.vue";
import Element from "../element/index.vue";
import { mapState, mapMutations } from "vuex";
// import VueDragResize from "vue-drag-resize";
export default {
  data() {
    return {
      isMove: false,
      left: 0,
      top: 0,
      screenWidth: 0,
      screenHeight: 0,
      offetX: 0,
      offetY: 0,
    };
  },

  computed: {
    ...mapState([
      "elements",
      "paperWidth",
      "paperHeight",
      "current",
      "showPanel",
    ]),
    conWidth() {
      return this.$refs.container.clientWidth;
    },
    conHeight() {
      return this.$refs.container.clientHeight;
    },
  },
  mounted() {
    const { left, top } = this.$refs.container.getBoundingClientRect();
    this.left = left;
    this.top = top;
    console.log(left, top);
  },
  methods: {
    ...mapMutations(["setElements", "setCurrent"]),
    handleDragover(e) {
      e.preventDefault();
    },
    handleChange(val) {
      console.log(val);
      this.setCurrent(val);
    },
    onClickOutside() {
      console.log("defaut outside");
    },
    handleDrop() {
      // const left,top =  e.x, e.y;
      //   e.preventDefault();
      //   console.log(e);
      //   const dragId = e.dataTransfer.getData("text/plain");
      //   console.log(dragId);
      //   this.$refs.dropable.appendChild(dragID)
    },
    handleStart(ele) {
      this.$set(ele, "className", "active");
    },
    handleEnd(ele, e) {
      const { x, y } = e;
      console.log(x, y);
    },
    handleMouseDown(ele, e) {
      this.setCurrent(ele);
      console.log(e);
      // const { x, y } = e;
      // let { left, top } = e.target.style;
      // this.left = parseInt(left);
      // this.top = parseInt(top);
      // console.log(this.left, this.top);
      // console.log("down", x, y);
      this.$set(this.current, "active", true);
      this.$set(this.current, "className", "select");
      this.isMove = true;
    },
    handleMouseUp() {
      this.isMove = false;
    },
    handleMouseMove(e) {
      if (this.isMove) {
        let { x, y } = e;
        console.log(x, y);
        x = x - this.left;
        y = y - this.top;
        const style = {
          left: `${x}px`,
          top: `${y}px`,
        };
        this.$set(this.current, "style", style);
      }
    },
    //demo
    activateEv(index) {
      this.$store.dispatch("ele/setActive", { id: index });
    },
    deactivateEv(index) {
      this.$store.dispatch("ele/unsetActive", { id: index });
    },
    changePosition(newele, index) {
      this.$store.dispatch("ele/setTop", { id: index, top: newele.top });
      this.$store.dispatch("ele/setLeft", { id: index, left: newele.left });
      this.$store.dispatch("ele/setWidth", {
        id: index,
        width: newele.width,
      });
      this.$store.dispatch("ele/setHeight", {
        id: index,
        height: newele.height,
      });
    },
    changeSize(newele, index) {
      this.$store.dispatch("ele/setTop", { id: index, top: newele.top });
      this.$store.dispatch("ele/setLeft", { id: index, left: newele.left });
      this.$store.dispatch("ele/setWidth", {
        id: index,
        width: newele.width,
      });
      this.$store.dispatch("ele/setHeight", {
        id: index,
        height: newele.height,
      });
    },
  },
  components: {
    Element,
    SettingPanel,
    // draggable,
    // VueDragResize,
  },
};
</script>

<style lang="scss">
.default-template {
  background: #ffffff;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  border: 1px #999 solid;
  position: relative;
  // user-select: none;
  z-index: 2;
  .template {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .element-item {
    display: inline-block;
    position: absolute;
    // transition: all 0.2s ease;
    transform-origin: center;
    // pointer-events: none;
  }
  .active {
    border: 1px solid var(--primaryColor);
    background-color: var(--primaryColor);
    cursor: move;
  }
  .select {
    // &::before {
    //   width: 1000vw;
    //   height: 1px;
    //   border-top: 1px dashed #999;
    //   display: inline-block;
    //   content: "";
    //   position: absolute;
    //   left: -500vw;
    // }
    // &::after {
    //   width: 1px;
    //   height: 1000vh;
    //   border-left: 1px dashed #999;
    //   display: inline-block;
    //   content: "";
    //   position: absolute;
    //   top: -500vh;
    //   left: 0;
    // }
  }
}
</style>
