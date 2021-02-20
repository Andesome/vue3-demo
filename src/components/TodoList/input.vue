<template>
  <input
    :value="text"
    placeholder="输入"
    v-on:keyup.enter="$emit('enter')"
    @input="$emit('update:text', $event.target.value)"
  />
</template>


<script>
export default {
  props: {
    text: String,
  },
  emits: ["update:text", "enter"],

};
</script>