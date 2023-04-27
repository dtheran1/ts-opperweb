import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
// import LoginView from '../views/Login.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { noAuth: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: { noAuth: true }
  },
  {
    path: '/backoffice',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { noAuth: false }
  },
  {
    path: '/backoffice/categories-list',
    name: 'Categories',
    component: () => import('../views/categories/ListCategories.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router
