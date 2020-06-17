<template>
  <Static title="Home">
    <div>
      <p>Welcome</p>
      <nav>
        <router-link to="/dashboard" class="link">Go to Dashboard</router-link>
        <router-link to="/about" class="link">About</router-link>
      </nav>
    </div>
  </Static>
</template>

<script>
// @ is an alias to /src
import Static from '@/components/1.layouts/Static';
import LogMixin from '@/mixins/Log.mixin';

export default {
  name: 'Home',
  mixins: [LogMixin],
  components: { Static },
  created() {
    this.log('Logging from inside Home View');
  },
};
</script>
