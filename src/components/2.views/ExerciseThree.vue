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
// - add a default child component to load "ExerciseTwo"
// - use this component to be the "layout" of the jokes route
// - add another route "/jokes/{jokeId}" to load "/jokes/individualJoke.vue"
// - make this two component part of the same webpack chunk
// - Change Individual Joke to load the provided Joke Id
// - Add a button to "individual Joke", to go to the "jokes" view
// - Create A new route "/firstJoke" that redirect to "jokes/1"

//EXTRA
// - Create A new route "/firstJoke" that redirect to "jokes/1"
// - add logic in "individual Joke" to "redirect back" after 5 seconds of being on the component.
</script>

<style></style>
