import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import ('../views/home/Home');
const Profile = () => import ('../views/profile/Profile');
const Classify = () => import ('../views/classify/Classify');
const Shoping = () => import ('../views/shoping/Shoping');

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/classify',
    component:Classify
  },
  {
  path:'/shoping',
    component:Shoping
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
