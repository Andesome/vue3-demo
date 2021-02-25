<template>
  <div>parent<slot></slot></div>
</template>

<script>
export default {
  name: "Parent",

  beforeCreate() {
    console.log("parent beforeCreate");
  },

  created() {
    console.log("parent create");
  },

  mounted() {
    console.log("mounted mounted");
  },
};
</script>