<template>
  <div class="authenticated">
    <Master>
      <template #header>
        <nav>
          <router-link to="/">Logout</router-link>|
          <router-link to="/dashboard/">Dashboard</router-link>|
          <router-link to="/dashboard/article">Post</router-link>|
          <router-link to="/dashboard/edit">Edit</router-link>
        </nav>
      </template>
      <section class="authenticated__body">
        <slot />
        <footer>
          <slot name="footer" />
        </footer>
      </section>
    </Master>
  </div>
</template>

<script>
import Master from '@/layouts/Master';

export default {
  name: 'Authenticated',
  components: {
    Master,
  },
  props: {
    pageSubTitle: {
      type: String,
      default: 'Default',
    },
  },
};
</script>

<style lang="scss" scoped>
.authenticated {
  &__body {
    @include flex(column, nowrap, space-between, stretch);
  }
}
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
