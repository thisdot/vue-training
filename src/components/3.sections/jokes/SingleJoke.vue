<template>
  <article v-if="joke" class="exerciseOne">
    <h2>Special view that displayes a single joke</h2>
    <br />
    <h3>{{ joke.story }}</h3>
    <p class="punchLine">{{ joke.punchLine }}</p>
  </article>
</template>

<script>
// import { fetchJoke } from "@/assets/jokes.js";

export default {
  name: 'ExerciseOne',
  data() {
    return {
      joke: null,
    };
  },
  mounted() {},
};
</script>

<style lang="scss">
.exerciseOne {
  width: 500px;
  margin: 50px auto;
  h2 {
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
