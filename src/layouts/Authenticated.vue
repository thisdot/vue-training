<template>
  <div class="authenticated">
    <Master>
      <template #header>
        <div class="container row authenticated__header">
          <a href="#">
            <img
              class="authenticated__logo"
              src="https://placeholder.pics/svg/140x50"
              alt=""
            />
          </a>
          <nav class="row authenticated__nav">
            <router-link class="link link--light" to="/">Logout</router-link>
            <!--            <router-link class="link link&#45;&#45;light" to="/dashboard/">Dashboard</router-link>-->
            <!--            <router-link class="link link&#45;&#45;light" to="/dashboard/article">Post</router-link>-->
            <!--            <router-link class="link link&#45;&#45;light" to="/dashboard/edit">Edit</router-link>-->
          </nav>
        </div>
      </template>
      <slot />
      <template #footer>
        <slot name="footer" />
      </template>
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
  a {
    display: inline-block;
  }

  &__logo {
    border-radius: 15px;
    display: block;
  }

  &__nav {
    padding: 10px 0;

    a:not(:last-child)::after {
      content: '|';
      padding: 0 10px;
    }
  }
}
</style>
