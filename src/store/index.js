import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      list: [],
    };
  },

  mutations: {
    submit(state, payload) {
      state.list.push({ ...payload });
    },

    deleteItem(state, payload) {
      const newList = state.list.filter((v) => v.id !== payload.id);
      state.list = newList;
    },
  },

  getters: {
    list(state) {
      return state.list;
    },
  },
});
