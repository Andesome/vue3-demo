<template>
  <li>{{data.text}} <button @click="handleDelete">delete</button></li>
</template>


<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    handleDelete() {
      this.$store.commit('deleteItem', this.data)
    }
  }
}
</script>