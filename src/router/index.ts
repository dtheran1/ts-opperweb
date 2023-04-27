import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
// import LoginView from '../views/Login.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
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
  },
  {
    path: '/backoffice/create-category',
    name: 'CreateCategory',
    component: () => import('../views/categories/CreateCategory.vue')
  },
  {
    path: '/backoffice/update-category/:id?',
    name: 'UpdateCategory',
    component: () => import('../views/categories/CreateCategory.vue'),
    props: true
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router
