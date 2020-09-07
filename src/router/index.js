import Vue from 'vue';
import Router from 'vue-router';
import movieList from '@/views/movie-list';
Vue.use(Router);

export default new Router({
  routes: [
    // 由于展示的内容样式是一样的，只是数据不同，这里使用同一个组件，实现路由跳转
    { name: 'home', path: '/', redirect: { name: 'in_theaters' } },
    { name: 'in_theaters', path: '/in_theaters', component: movieList },
    { name: 'coming_soon', path: '/comming_soon', component: movieList },
    { name: 'top250', path: '/top250', component: movieList }
  ]
});
