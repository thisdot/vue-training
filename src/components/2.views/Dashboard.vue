<template>
  <Authenticated page-sub-title="Dashboard" @logout="handleLogout">
    <nav>
      <router-link to="/dashboard" class="link">Articles</router-link>
      <router-link to="/dashboard/create" class="link">Create New</router-link>
    </nav>
    <router-view />
  </Authenticated>
</template>

<script>
// @ is an alias to /src
import Authenticated from '@/components/1.layouts/Authenticated';
import { mapActions } from 'vuex';

export default {
  nam: 'Dashboard',
  components: { Authenticated },
  async created() {
    await this.getArticles();
  },
  methods: {
    ...mapActions(['getArticles', 'logout']),
    async handleLogout() {
      await this.logout();
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  display: inline-block;
  margin-right: 20px;

  border: 1px solid $primary;
  border-radius: 5px;
  padding: 10px;
  text-decoration: none;
}
</style>
