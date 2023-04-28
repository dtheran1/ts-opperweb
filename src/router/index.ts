import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import store from '../store';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/backoffice',
    name: 'Layout',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'categories-list',
        name: 'Categories',
        component: () => import('../views/categories/ListCategories.vue'),
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
    ]
  },
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userAuth = store.state.user
  if(!to.meta?.noAuth) {
    if(!userAuth.email.length) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }
})


export default router
