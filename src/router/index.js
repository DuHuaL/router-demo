import Vue from 'vue';
import Router from 'vue-router';
import movieList from '@/views/movie-list';
Vue.use(Router);

export default new Router({
  routes: [
    { name: 'movieList', path: '/', component: movieList }
  ]
});
