<template>
  <todo-input @submit="handleInputSubmit"></todo-input>
  <todo-list></todo-list>
</template>

<script>
import TodoInput from "./TodoInput";
import TodoList from "./List";
export default {
  components: {
    "todo-input": TodoInput,
    "todo-list": TodoList,
  },

  methods: {
    handleInputSubmit(e) {
      console.log('handleInputSubmit:', e)
    }
  }
};
</script>