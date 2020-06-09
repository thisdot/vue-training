<template></template>

<script>
// #Exercise 1
// Summary: In this exercise we are going to learn how to develop basic components and start to use Vue.

// This component will feature:
// - An HTMl with a visible Story
// - A button to show the "punchLine"
// - A button text that should change depending if you the punchline is showing or not
// - A specific joke loaded with the available method
// - Some style set using style methods below

//Steps
// - Create basic HTML (with your existing skills, vue not needed here), make all visible, forget about hiding the punch line
// - Apply styles
// - Load the joke in one of the lifecycle
// - set the loaded joke to component Data
// - show the Loaded data in the HTML using Vue directives
// - Create a new Data to manage the component state (to hide, show punch line)
// - Use v-show to hide show the punch line
// - use @click to "set" the above state (to show hide punch line)
// - Create a computed property to "generate" the button text
// - Apply the above computed properties to the button

import { fetchJoke } from "@assets/jokes.js";
</script>

<style>
</style>
