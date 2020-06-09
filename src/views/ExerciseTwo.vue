<template></template>

<script>
// #Exercise 2
// Summary: In this exercise we are going to improve our Vue knowledge by expanding the previous component and add further features

// This component will feature:
// - Async data loading
// - Conditional component loading
// - use of multiple vue directives
// - async component loading
// - use of properties
// - use of mixins

//Steps
// - async import our ExcerciseOne component
// - Create basic html and load a single "ExerciseOne"
// - Asyn load our list of jokes
// - Use v-for to load multiple Instances of ExerciseOne
// - Pass the properties down from the current component to "excerciseOne"
// - Change ExerciseOne to accept properties instead than load its own data (youneed to leave the property used for the hide and show of the punch line)
// - Create a "loading" HTML and add v-if to make sure there is no error while data is loaded

//EXTRA
// - Load the Log mixins in the current component
// - change Excercise one to "emit" a msg when button is clicked
// - log something (from the parent component) using the Mixins when the button is clicked in the child component
// - change the colour of the log msg

import { fetchJokes } from "@assets/jokes.js";
</script>

<style>
</style>
