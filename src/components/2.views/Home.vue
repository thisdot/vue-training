<template>
  <Static title="Home">
    <BaseButton>
      Click Me
    </BaseButton>
    <div v-if="!isLoggedIn">
      <p>Please login</p>
      <router-link to="/login">Login</router-link>
      <router-link to="/about" class="link">About</router-link>
    </div>
    <div v-else>
      <p>Welcome</p>
    </div>
  </Static>
</template>

<script>
// @ is an alias to /src
import Static from '@/components/1.layouts/Static';
import { mapGetters } from 'vuex';
import LogMixin from '@/mixins/Log.mixin';
import BaseButton from '@/components/BaseButton';

export default {
  name: 'Home',
  mixins: [LogMixin],
  components: { Static, BaseButton },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  created() {
    this.log('Logging from inside Home View');
  },
};
</script>
