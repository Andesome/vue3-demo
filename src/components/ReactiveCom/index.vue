<template>
  <h3>reactive test component</h3>
  <span>{{ JSON.stringify(state) }}</span>

  <div>
    <button @click="handleChange('a', 2)">handleChange('a', 2)</button>
    <br />
    <button @click="handleChange('obj.c', 2)">handleChange('obj.c', 2)</button>
    <br />
    <button @click="handleChange('obj.otherObj.test', 2)">
      handleChange('obj.otherObj.test', 2)
    </button>
    <br/>
    <button @click="addMethod">addMethod</button>
  </div>
</template>


<script>
import { set } from "lodash";
import { reactive, onMounted, onUpdated, watch, getCurrentInstance } from "vue";
import { reactive as createReactive } from "../../utils/reactive";

export default {
  name: "ReactiveCom",

  methods: {
    handleTest() {
      console.log('handletest this:', this)
    },
  },

  setup() {
    const state = reactive({ a: 1 });
    const myState = createReactive({ a: 1 });

    state.b = 2;
    myState.b = 2;

    state.obj = { c: 1, d: 2, otherObj: { test: 1 } };
    myState.obj = { c: 1, d: 2, otherObj: { test: 1 } };

    console.log("state", state);
    console.log("myState", myState);

    onMounted(() => {
      const _this = getCurrentInstance();

      _this.proxy.addMethod = () => {
        console.log("添加了一个新方法");
      };
      console.log("mouted", _this.proxy);
    });

    onUpdated(() => {
      console.log("uupdated:", getCurrentInstance());
    });

    watch(
      () => state.a,
      (val, oldVal) => {
        console.log("state a change:", val, oldVal);
      }
    );

    watch(
      () => state.obj.otherObj.test,
      (val, oldVal) => {
        console.log("state.otherObj.test change:", val, oldVal);
      }
    );

    const handleChange = (key, value) => {
      set(state, key, value);
      set(myState, key, value);
    };

    return {
      state,
      handleChange,
    };
  },
};
</script>