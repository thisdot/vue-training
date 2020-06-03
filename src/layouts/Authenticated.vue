<template>
  <div>
    <nav>
      <router-link to="/">Logout</router-link>|
      <router-link to="/dashboard/">Dashboard</router-link>|
      <router-link to="/dashboard/article">Post</router-link>|
      <router-link to="/dashboard/edit">Edit</router-link>
    </nav>
    <h2>{{ pageSubTitle }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Authenticated',
  props: {
    pageSubTitle: {
      type: String,
      default: 'Default',
    },
  },
};
</script>

<style lang="scss">
/*nav {*/
/*  padding: 30px;*/

/*  a {*/
/*    font-weight: bold;*/
/*    color: #2c3e50;*/

/*    &.router-link-exact-active {*/
/*      color: #42b983;*/
/*    }*/
/*  }*/
/*}*/
</style>
