import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
// import LoginView from '../views/Login.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Login.vue'),
    meta: { noAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router
