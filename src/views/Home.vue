<template>
  <Static title="Home">
    <p>Please login</p>
    <router-link to="/dashboard">Login</router-link>
    <template #footer>
      <p>© 2020 This Dot. All Rights Reserved.</p>
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
