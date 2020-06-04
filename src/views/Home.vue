<template>
  <Static title="Home">
    <p>Please login</p>
    <router-link to="/dashboard">Login</router-link>
  </Static>
</template>

<script>
// @ is an alias to /src
import Static from '@/layouts/Static';

export default {
  name: 'Home',
  components: { Static },
};
</script>
