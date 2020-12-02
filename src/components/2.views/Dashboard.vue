<template>
  <Authenticated
page-sub-title="Dashboard" @logout="handleLogout"
>
    <nav>
      <router-link
to="/dashboard" class="link">
        Articles
      </router-link>
      <router-link
to="/dashboard/create" class="link">
        Create New
      </router-link>
      <router-link
to="/fake/path" class="link">
        Fake path
      </router-link>
      <component
        :is="linkDisabled ? 'span' : 'router-link'"
        :disabled="linkDisabled"
        to="/link"
        class="link"
      >
        Disabled Link
      </component>
      <modal-button />
    </nav>
    <router-view v-slot="{ Component }">
      <transition
name="page" mode="out-in"
>
        <component :is="Component" />
      </transition>
    </router-view>
  </Authenticated>
</template>

<script>
// @ is an alias to /src
import Authenticated from '@/components/1.layouts/Authenticated';
import ModalButton from '@/components/4.base/Modal';
import { mapActions } from 'vuex';

export default {
  nam: 'Dashboard',
  components: {
    Authenticated,
    ModalButton,
  },
  data() {
    return {
      linkDisabled: true,
    };
  },
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

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
