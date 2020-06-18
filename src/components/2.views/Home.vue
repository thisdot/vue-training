<template>
  <Static title="Home">
    <div v-if="!isLoggedIn">
      <p>{{ $t('welcome') }}</p>
      <nav>
        <router-link to="/login">Login</router-link>
        <router-link to="/about" class="link">{{ $t('about') }}</router-link>
      </nav>
    </div>
    <div v-else>
      <p>Welcome</p>
      <router-link to="/dashboard" class="link">Go to Dashboard</router-link>
    </div>
    <button @click="$root.locale = 'en'">change To english</button>
    <button @click="$root.locale = 'it'">change To italian</button>
  </Static>
</template>

<script>
// @ is an alias to /src
import Static from '@/components/1.layouts/Static';
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
