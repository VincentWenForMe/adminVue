import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/views/home.vue';
import Login from '@/components/admin/login.vue';
import IndexAdmin from '@/components/admin/Index.vue';
import InContainer from '../components/admin/Incontainer.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/Index',
      children: [
        {
          path: '/Index',
          component: Home
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'IndexAdmin',
      component: IndexAdmin,
      redirect: '/admin',
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/admin',
          component: InContainer
        }
      ]
    }
  ]
});


export default router;
