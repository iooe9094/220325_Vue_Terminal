import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 라우터를 쓰기 위해서는 Vue.use 펑션을 실행
Vue.use(VueRouter)

// 아래가 메뉴
// 메뉴 객체 배열
const routes = [
  {
    // 메인 페이지
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // About 페이지
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

// 라우터 생성 부분
const router = new VueRouter({
  routes
})

export default router
