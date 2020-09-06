import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: ''
  },
  getters: {
    info: state => state,
  },
  mutations: {
    SET_TOKEN (state, data) {
      state.token = data;
      console.log('state', state, data);
    }
  },
  actions: {
    SET_TOKEN_ASYNC ({ commit, state }, data) {
      commit('SET_TOKEN', data)
    }
  },
  modules: {
  },
});
