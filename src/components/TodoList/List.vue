<template>
  <ul>
    <list-item v-for="item in list" :key="item.text" :data="item"></list-item>
  </ul>
</template>


<script>
import { mapGetters } from "vuex";
import ListItem from "./ListItem";

export default {
  components: {
    "list-item": ListItem,
  },
  computed: {
    ...mapGetters(["list"]),
  },
};
</script>