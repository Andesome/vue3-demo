<template>
  <li>
    {{ data.text }}
    <delete-button  :onClick="handleDelete"></delete-button>
  </li>
</template>


<script>
import DeleteButton from "./button";
import store from "../../store";

export default {
  components: {
    DeleteButton,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    return {
      handleDelete() {
        store.commit("deleteItem", props.data);
      },
    };
  },
};
</script>