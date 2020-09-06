import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: ''
  },
  getters: {},
  mutations: {
    SET_TOKEN (state, data) {
      console.log('state', state, data);
    }
  },
  actions: {
    SET_TOKEN_Async ({ commit, state }, data) {
      commit('SET_TOKEN', data)
    }
  },
  modules: {
  },
});
