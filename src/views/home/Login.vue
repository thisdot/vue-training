<template>
  <Static title="Login">
    <div class="login">
      <label>Enter your Username</label>
      <input type="text" />
      <p><a href="#" class="link">Login</a></p>
    </div>
  </Static>
</template>

<script>
import Static from '@/layouts/Static';
export default {
  name: 'Login',
  components: {
    Static,
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
    display: inline-block;
    margin: 10px auto;
    border: 1px solid $primary;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
  }
}
</style>
