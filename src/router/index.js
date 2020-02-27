import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieHome from '@/components/MovieHome';

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'MovieHome',
      component: MovieHome
    }
  ]
})