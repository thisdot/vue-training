<template>
  <Static title="Login">
    <div class="login">
      <label for="username">Enter your Username</label>
      <input type="text" id="username" v-model="username" />
      <a href="#" class="link" @click.prevent="submit">Login</a>
      <p v-if="signing">Signing you in ...</p>
    </div>
  </Static>
</template>

<script>
import Static from '@/components/1.layouts/Static';
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  components: {
    Static,
  },
  data() {
    return {
      username: null,
      signing: false,
    };
  },
  methods: {
    ...mapActions(['login']),
    async submit() {
      if (!this.username) {
        alert('Username is required!');
        return;
      }

      this.signing = true;

      await this.login(this.username);

      this.signing = false;

      this.$router.push({ path: '/dashboard' });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  margin: 0 auto;
  text-align: center;

  label {
    display: block;
    font-weight: bold;
  }

  input {
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
  }

  a {
    display: block;
    margin-top: 24px;
  }
}
</style>
