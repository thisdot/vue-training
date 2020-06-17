<template>
  <article v-if="joke" class="exerciseOne">
    <h1>{{ joke.story }}</h1>
    <p v-show="showPunchLine" class="punchLine">{{ joke.punchLine }}</p>
    <button @click="showPunchLine = !showPunchLine">{{ buttonText }}</button>
  </article>
</template>

<script>
// #Exercise 1
import { fetchFirstJoke } from '@/assets/jokes.js';

export default {
  name: 'ExerciseOne',
  data() {
    return {
      joke: fetchFirstJoke,
      showPunchLine: false,
    };
  },
  computed: {
    buttonText() {
      return this.showPunchLine
        ? 'what a bad joke, hide it please'
        : 'Show Punchline';
    },
  },
};
</script>

<style lang="scss">
.exerciseOne {
  width: 500px;
  margin: 50px auto;
  h1 {
    font-size: 32px;
    color: Black;
  }
  .punchLine {
    margin-top: 25px;
    margin-bottom: 25px;
    padding: 15px;
    border: 1px solid darkgrey;
    border-radius: 5px;
    box-shadow: 2px 2px 10px lightgray;
    background-color: lightgray;
  }
  button {
    padding: 10px 15px;
    border-radius: 4px;
    background-color: lightgray;
    font-weight: 800;
  }
}
</style>
