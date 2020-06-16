<template>
  <Static title="Exercise three">
    <router-view />
  </Static>
</template>

<script>
// #router/index.js - import
//
// const ExerciseOne = () => import(/* webpackChunkName: 'jokes' */ '@/components/3.sections/Jokes/ExerciseOne.vue');
// const ExerciseTwo = () => import(/* webpackChunkName: 'jokes' */ '@/components/3.sections/Jokes/ExerciseTwo.vue');
// const SingleJoke = () => import(/* webpackChunkName: 'jokes' */ '@/components/3.sections/Jokes/SingleJoke.vue');
// const ExerciseThree = () => import(/* webpackChunkName: 'jokes' */ '@/components/2.views/ExerciseThree.vue');
//
// #router/index.js - router
//
// {
//   path: '/jokes',
//   component: ExerciseThree,
//   children: [
//     {
//       path: '',
//       name: 'Jokes',
//       component: ExerciseTwo,
//     },
//     {
//       path: ':joke_id',
//       name: 'Joke',
//       component: SingleJoke,
//     },
//   ],
// },
//
// #singleJoke - hints
//
// async mounted() {
//   const jokeId = this.$route.params.joke_id;
//   this.joke = await fetchJoke(jokeId);
// }

import Static from '@/components/1.layouts/Static';

export default {
  name: 'ExerciseThree',
  components: { Static },
};
</script>

<style></style>
