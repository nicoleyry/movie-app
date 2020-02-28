import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieHome from '@/components/MovieHome';
import Movie from '@/components/Movie'
import SearchMovie from '@/components/SearchMovie'

Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MovieHome',
      component: MovieHome
    },
    {
      path: '/movie/:title',
      name: 'Movie',
      props: true,
      component: Movie
    },
    {
      path: '/search/:title',
      name: 'SearchMovie',
      props: true,
      component: SearchMovie
    }
  ]
})