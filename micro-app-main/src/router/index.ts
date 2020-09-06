import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import((`../components/Welcome`)),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import((`../components/Login`)),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
