import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/2.views/Home.vue';
import Login from '@/components/2.views/Login.vue';
import Dashboard from '@/components/2.views/Dashboard.vue';

const About = () =>
  import(/* webpackChunkName: 'about' */ '@/components/2.views/About.vue');
const Article = () =>
  import(
    /* webpackChunkName: 'article' */ '@/components/3.sections/dashboard/Article.vue'
  );
const Default = () =>
  import(
    /* webpackChunkName: 'default' */ '@/components/3.sections/dashboard/Default.vue'
  );
const Create = () =>
  import(
    /* webpackChunkName: 'create' */ '@/components/3.sections/dashboard/Create.vue'
  );

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next) {
      const loggedIn = localStorage.getItem('vue-training-username');
      if (loggedIn) {
        next({ path: '/' });
      } else {
        next();
      }
    },
  },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter(to, from, next) {
      const loggedIn = localStorage.getItem('vue-training-username');
      if (!loggedIn) {
        next({ path: '/login' });
      } else {
        next();
      }
    },
    children: [
      {
        path: '',
        name: 'Default',
        component: Default,
      },
      {
        path: 'article/:article_id',
        name: 'Article',
        component: Article,
      },
      {
        path: 'create',
        name: 'Create',
        component: Create,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
