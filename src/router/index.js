import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV);

Vue.use(Router);

import Layout from '../views/layout/layout';

export const constantRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: _import('dashboard/index'),
        name: 'dashboard',
        meta: {}
      },
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: '/documentation/index',
        component: _import('documentation/index'),
        name: 'documentation',
        meta: {}
      }
    ]
  },
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/keyboard',
    children: [
      {
        path: '/charts/keyboard',
        component: _import('charts/keyboard'),
        name: 'charts',
        meta: {}
      },
      {
        path: '/charts/lines',
        component: _import('charts/lines'),
        name: 'charts',
        meta: {}
      }
    ]
  },
  {
    path: '/login',
    component: _import('login/index'),
  },
  {
    path: '/401',
    component: _import('errorPage/401'),
  },
  {
    path: '/404',
    component: _import('errorPage/404'),
  }
];

const router = new Router({
  routes: constantRouterMap
});

export default router;
