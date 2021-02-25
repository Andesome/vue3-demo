<template>
  <to-do-list></to-do-list>
  <seamless-list>
    <!-- <template v-slot:title>
      <div>title</div>
    </template> -->
    <delete-button></delete-button>
  </seamless-list>
  <reactive-com></reactive-com>

  <life-cycle></life-cycle>
</template>

<script>
import DeleteButton from './components/TodoList/button'
import TodoList from './components/TodoList/Index'
import SeamlessList from './components/SeamlessList/index'
import ReactiveCom from './components/ReactiveCom'
import LifeCycle from './components/LifeCycle'

export default {
  components: { "to-do-list": TodoList, SeamlessList, DeleteButton, ReactiveCom, LifeCycle },
  name: 'App',
  methods: {
    handleTest() {
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
