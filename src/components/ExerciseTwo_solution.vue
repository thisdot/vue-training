<template>
  <article>
    <h1 style="color:black">This is your list of jokes</h1>
    <div v-if="jokes.length === 0">Hm.. thinking of some jokes..</div>
    <section v-else>
      <ExerciseOne v-for="joke in jokes" :key="joke.id" :v-bind="joke" />
    </section>
  </article>
</template>

<script>
// #Exercise 2
import { fetchJokes } from '@/assets/jokes.js';
import ExerciseOne from './ExerciseOne_solution';

export default {
  name: 'ExerciseTwo',
  components: {
    ExerciseOne,
  },
  data() {
    return {
      jokes: [],
    };
  },
  computed: {},
  async mounted() {
    this.jokes = await fetchJokes();
  },
};
</script>

<style></style>
