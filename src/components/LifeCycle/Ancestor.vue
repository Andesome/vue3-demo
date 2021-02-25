<template>
  <div>Ancestor<slot></slot></div>
</template>

<script>
export default {
  name: "Ancestor",

  beforeCreate() {
    console.log("Ancestor beforeCreate");
  },

  created() {
    console.log("Ancestor create");
  },

  mounted() {
    console.log("Ancestor mounted");
  },
};
</script>