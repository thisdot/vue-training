<template>
  <div id="app">
    <h2>Select a page</h2>
    <button @click="currentPage = 'Dashboard'">Dashboard</button>
    <button @click="currentPage = 'About'">About</button>
    <component :is="currentPage" />
  </div>
</template>

<script>
import Dashboard from '@/components/2.views/Dashboard';
import About from '@/components/2.views/About';
export default {
  components: {
    Dashboard,
    About,
  },
  data() {
    return {
      currentPage: 'Dashboard',
    };
  },
};
</script>

<style lang="scss">
body {
  background: rgb(92, 109, 231);
  background: linear-gradient(
    45deg,
    rgba(92, 109, 231, 1) 0%,
    rgba(121, 94, 233, 1) 100%
  );
}
</style>
