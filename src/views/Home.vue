<template>
  <Static title="Home">
    <div v-if="!isLoggedIn">
      <p>Please login</p>
      <router-link to="/login">Login</router-link>
    </div>
    <div v-else>
      <p>Welcome</p>
    </div>
  </Static>
</template>

<script>
// @ is an alias to /src
import Static from '@/layouts/Static';
import { mapGetters } from 'vuex';
import LogMixin from '@/mixins/Log.mixin';

export default {
  name: 'Home',
  mixins: [LogMixin],
  components: { Static },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  created() {
    this.log('Logging from inside Home View');
  },
};
</script>
