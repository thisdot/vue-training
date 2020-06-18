import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/2.views/Home.vue';
import Dashboard from '@/components/2.views/Dashboard.vue';

import ExerciseOne from '@/components/2.views/ExerciseOne.vue';
import ExerciseTwo from '@/components/2.views/ExerciseTwo.vue';

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
    component: Dashboard,
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
