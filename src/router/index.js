import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import Login from '@/views/home/Login.vue';
import Dashboard from '@/views/Dashboard.vue';

import ExerciseOne from '@/views/ExerciseOne.vue';
import ExerciseTwo from '@/views/ExerciseTwo.vue';

const About = () => import(/* webpackChunkName: 'about' */ '@/views/About.vue');
const Article = () =>
  import(/* webpackChunkName: 'article' */ '@/views/dashboard/Article.vue');
const Default = () =>
  import(/* webpackChunkName: 'default' */ '@/views/dashboard/Default.vue');
const Create = () =>
  import(/* webpackChunkName: 'create' */ '@/views/dashboard/Create.vue');

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
  {
    path: '/exercise/1',
    component: ExerciseOne,
  },
  {
    path: '/exercise/2',
    component: ExerciseTwo,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
