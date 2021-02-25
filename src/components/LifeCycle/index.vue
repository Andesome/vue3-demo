<template>
  <div>
    <ancestor>
      <parent>
        <div>
        <child1></child1>
        <child2></child2>

        </div>
      </parent>
    </ancestor>
  </div>
</template>


<script>
import Ancestor from './Ancestor'
import Parent from './Parent'
import Child1 from './Child1'
import Child2 from './Child2'

export default {
  components: {
    Ancestor,
    Parent,
    Child1,
    Child2
  },

    beforeCreate() {
    console.log("Wrapper beforeCreate");
  },

  created() {
    console.log("Wrapper create");
  },

  mounted() {
    console.log("Wrapper mounted");
  },
}
</script>