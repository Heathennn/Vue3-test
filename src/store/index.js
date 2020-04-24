import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    store_value: 'vuex msg'
  },
  mutations: {
    SET_STORE_VALUE(state, value) {
      state.store_value = value;
    }
  },
  actions: {
  },
  modules: {
  }
});
