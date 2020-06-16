<template>
  <div></div>
</template>

<script>
// #Exercise 3
// Summary: This exercise is aimed at introducing you to vue router and its settings
// Story: As an user of the website, I would like to have a joke route that will be used to load my jokes list and individual jokes.

// This component will feature:
// - basic vue router
// - vue router nested routes
// - Vue router with parameters
// - use of the Params within the component
// - Route redirect

//Steps
// - Create a Route for "/jokes"
// - use this file to be the "layout" of the jokes route and use Static Layout
// - add a default child component to load "ExerciseTwo"
// - add another route "/jokes/{joke_id}" to load "/ExerciseOne.vue"
// - make the three components used in this route part of the same webpack chunk
// - Change ExerciseOne Joke to be able to either load parameter from rotue or by receiving it from parent
// - Add a button to "ExerciseOne", to go to the "jokes" view

//EXTRA
// - Create A new route "/firstJoke" that redirect to "jokes/1" (this uses route redirect)
// - add logic in "individual Joke" to "redirect back" after 5 seconds of being on the component.
</script>

<style></style>
