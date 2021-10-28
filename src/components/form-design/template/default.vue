<template>
  <!-- @dragover="handleDragover" -->
  <!-- @drop="handleDrop" -->
  <div
    class="default-template"
    ref="container"
    @mouseup="handleMouseUp"
    @mousemove="handleMouseMove"
  >
    <!-- @dragstart="(e) => handleStart(ele, e)" -->
    <!-- @dragend="(e) => handleEnd(ele, e)" -->
    <div
      class="element-item"
      :class="ele.className"
      v-for="ele in elements"
      :key="ele.id"
      :style="ele.style"
      @mousedown.stop="handleMouseDown(ele, $event)"
    >
      {{ ele.name }}
    </div>
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
  </div>
</template>

<script>
// import draggable from "vuedraggable";
import { mapState, mapMutations } from "vuex";
// import VueDragResize from "vue-drag-resize";
export default {
  data() {
    return {
      current: null,
      isMove: false,
      left: 0,
      top: 0,
    };
  },
  computed: {
    ...mapState(["elements"]),
    conWidth() {
      return this.$refs.container.clientWidth;
    },
    conHeight() {
      return this.$refs.container.clientHeight;
    },
  },

  methods: {
    ...mapMutations(["setElements"]),
    handleDragover(e) {
      e.preventDefault();
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
      this.current = ele;
      const { x, y } = e;
      let { left, top } = e.target.style;
      this.left = parseInt(left);
      this.top = parseInt(top);
      console.log(this.left, this.top);
      console.log("down", x, y);
      this.$set(this.current, "className", "select");
      this.isMove = true;
    },
    handleMouseUp(e) {
      this.isMove = false;
      console.log("up", e.target);
    },
    handleMouseMove(e) {
      if (this.isMove) {
        // console.log("move", e);
        let { x, y } = e;
        let { offsetWidth, offsetHeight } = e.target;
        // let left = x - offsetWidth / 2;
        // let top = x - offsetHeight / 2;
        console.log(offsetWidth, offsetHeight);
        let left =
          x + offsetWidth >= this.conWidth ? this.conWidth - offsetWidth : x;
        let top = y;
        const style = {
          left: `${left}px`,
          top: `${top}px`,
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
    // draggable,
    // VueDragResize,
  },
};
</script>

<style lang="scss">
.default-template {
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  border: 1px #999 solid;
  position: relative;
  user-select: none;
  .template {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .element-item {
    display: inline-block;
    background-color: red;
    position: absolute;
    // transition: all 0.2s ease;
    transform-origin: center;
  }
  .active {
    border: 1px solid var(--primaryColor);
    background-color: var(--primaryColor);
    cursor: move;
  }
  .select {
    &::before {
      width: 1000vw;
      height: 1px;
      border-top: 1px dashed #999;
      display: inline-block;
      content: "";
      position: absolute;
      left: -500vw;
    }
    &::after {
      width: 1px;
      height: 1000vh;
      border-left: 1px dashed #999;
      display: inline-block;
      content: "";
      position: absolute;
      top: -500vh;
      left: 0;
    }
  }
}
</style>
