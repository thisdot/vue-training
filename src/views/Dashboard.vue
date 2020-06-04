<template>
  <Authenticated page-sub-title="Dashboard">
    <ul>
      <li><router-link to="#" class="link">Category 1</router-link></li>
      <li><router-link to="#" class="link">Create New</router-link></li>
    </ul>
    <router-view />
  </Authenticated>
</template>

<script>
// @ is an alias to /src
import Authenticated from '@/layouts/Authenticated';

export default {
  nam: 'Dashboard',
  components: { Authenticated },
};
</script>

<style lang="scss" scoped>
ul {
  display: block;
  list-style: none;
}

li {
  display: inline-block;
  margin-right: 20px;

  border: 1px solid $primary;
  border-radius: 5px;
  padding: 10px;
}
</style>
