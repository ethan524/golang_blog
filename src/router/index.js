import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home.vue')
const Index = () => import('../views/Index.vue')
const ArticleInfos = () => import('../views/ArticleInfos')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/index',
    component: Home,
    children:[
      {
        path:'/index',
        name:'Index',
        component:Index,
      },
      {
        path:'/article-infos',
        name:'ArticleInfos',
        component:ArticleInfos,
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
