<template>
  <seamless-scroll :data="list" class="warp">
    <ul>
      <li v-for="item in list" :key="item">
        <slot name="title"></slot>
        <slot :item="{item: 1}"></slot>
      </li>
    </ul>
  </seamless-scroll>
</template>


<script>
import SeamlessScroll from "../SeamlessScroll/index.vue";

export default {
  name: "SeamlessList",
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  components: {
    SeamlessScroll,
  },
};
</script>

<style scoped>
.warp {
  width: 100px;
  height: 50px;
  overflow: hidden;
}
</style>