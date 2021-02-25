<template>
  <div>Child2<slot></slot></div>
</template>

<script>
export default {
  name: "Child2",

  beforeCreate() {
    console.log("Child2 beforeCreate");
  },

  created() {
    console.log("Child2 create");
  },

  mounted() {
    console.log("Child2 mounted");
  },
};
</script>