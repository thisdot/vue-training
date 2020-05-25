<template>
  <div>
    <nav>
      <router-link to="/">Logout</router-link>|
      <router-link to="/dashboard/">Dashbord</router-link>|
      <router-link to="/dashboard/article">Post</router-link>|
      <router-link to="/dashboard/edit">Edit</router-link>
    </nav>
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
