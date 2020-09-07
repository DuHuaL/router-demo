import Vue from 'vue';
import Vuex from 'vuex';
import movieList from './modules/movie-list';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    movieList
  },
  state: {},
  mutations: {},
  actions: {}
});

export default store;
