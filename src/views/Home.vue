<template>
  <Static page-title="Home">
    <router-view />
    <router-link to="/dashboard">Login</router-link>
    <template #footer>
      <p>Hello World!</p>
    </template>
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
