<template>
  <input v-on:keyup.enter="handleSubmit" v-model="text" />
</template>


<script>
export default {
  emits: ["submit"],
  data() {
    return {
      text: "",
    };
  },
  mounted() {
    console.log('input渲染好了', this)
  },
  methods: {
    handleSubmit() {
      if (this.text) {
        const data = {
          text: this.text,
          id: Math.random().toString(36).substr(2),
        };
        this.$emit("submit", { ...data });
        this.$store.commit("submit", data);
        this.text = "";
      }
    },
  },
};
</script>