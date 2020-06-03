import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import Dashboard from '@/views/Dashboard.vue';

const About = () => import(/* webpackChunkName: 'about' */ '@/views/About.vue');
const Article = () =>
  import(/* webpackChunkName: 'dashboard' */ '@/views/dashboard/Article.vue');
const Default = () =>
  import(/* webpackChunkName: 'dashboard' */ '@/views/dashboard/Default.vue');
const Edit = () =>
  import(/* webpackChunkName: 'dashboard' */ '@/views/dashboard/Edit.vue');

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
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'Default',
        component: Default,
      },
      {
        path: 'article',
        name: 'Article',
        component: Article,
      },
      {
        path: 'edit',
        name: 'Edit',
        component: Edit,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
