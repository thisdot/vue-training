<template>
  <div>
    <h1>Static Layout</h1>
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
