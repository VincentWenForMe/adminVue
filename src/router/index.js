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
        path: '/dashboard',
        component: _import('dashboard/index'),
        name: 'dashboard',
        meta: {title: '首页'}
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
        meta: {title: '文档'}
      }
    ]
  },
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/keyboard',
    name: 'charts',
    children: [
      {
        path: '/charts/keyboard',
        component: _import('charts/keyboard'),
        meta: {title: '键盘表'}
      },
      {
        path: '/charts/lines',
        component: _import('charts/lines'),
        meta: {title: '线性表'}
      }
    ]
  },
  {
    path: '/ele',
    component: Layout,
    redirect: '/ele/markdown',
    name: 'ele',
    children: [
      {
        path: '/ele/markdown',
        component: _import('ele/markdown'),
        meta: {title: 'UEEditor富文本'}
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/form',
    name: 'form',
    children: [
      {
        path: '/form',
        component: _import('form/index'),
        meta: {title: 'form'}
      }
    ]
  },
  {
    path: '/tables',
    component: Layout,
    redirect: '/tables/tables',
    name: 'tables',
    children: [
      {
        path: '/tables/tables',
        component: _import('tables/tables'),
        meta: {title: 'table'}
      }
    ]
  },
  {
    path: '/meta',
    component: Layout,
    redirect: '/meta/meta',
    name: 'meta',
    children: [
      {
        path: '/meta/meta',
        component: _import('meta/meta'),
        meta: {title: 'meta'}
      }
    ]
  },
  {
    path: '/indexScroll',
    component: Layout,
    redirect: '/indexScroll/indexScroll',
    name: 'indexScroll',
    children: [
      {
        path: '/indexScroll/indexScroll',
        component: _import('indexScroll/indexScroll'),
        meta: {title: 'indexScroll'}
      }
    ]
  },
  {
    path: '/login',
    component: _import('login/index'),
    meta: {title: '登录'}
  },
  {
    path: '/401',
    component: _import('errorPage/401'),
    meta: {title: '401'}
  },
  {
    path: '/404',
    component: _import('errorPage/404'),
    meta: {title: '404'}
  }
];

const router = new Router({
  mode: 'history',
  routes: constantRouterMap
});


const asyncRouterMap = [];

export default router;
