<template>
  <v3-input v-model:text="state.text" @enter="handleSubmit"></v3-input>
</template>


<script>
import { reactive, onMounted } from "vue";
import Input from './input'
import store from '../../store'


export default {
  emits: ["submit"],
  components: {
    'v3-input': Input,
  },
  setup(props, ctx) {
    const state = reactive({ text: "" });

    onMounted(() => {
      console.log("input渲染好了", props, ctx, state);
    });

    return {
      state,
      handleSubmit() {
        if (state.text) {
          const data = {
            text: state.text,
            id: Math.random().toString(36).substr(2),
          };
          ctx.emit("submit", { ...data });
          store.commit("submit", data);
          state.text = "";
        }
      },
    };
  },
};
</script>