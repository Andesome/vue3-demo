<template>
  <div>Child1<slot></slot></div>
</template>

<script>
export default {
  name: "Child1",

  beforeCreate() {
    console.log("Child1 beforeCreate");
  },

  created() {
    console.log("Child1 create");
  },

  mounted() {
    console.log("Child1 mounted");
  },
};
</script>