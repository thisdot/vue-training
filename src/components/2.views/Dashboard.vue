<template>
  <Authenticated page-sub-title="Dashboard">
    <nav>
      <router-link to="/dashboard" class="link">Articles</router-link>
    </nav>
    <router-view />
  </Authenticated>
</template>

<script>
// @ is an alias to /src
import Authenticated from '@/components/1.layouts/Authenticated';

export default {
  name: 'Dashboard',
  components: { Authenticated },
};
</script>

<style lang="scss" scoped></style>
