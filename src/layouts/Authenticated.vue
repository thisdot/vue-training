<template>
  <div class="authenticated">
    <header class="authenticated__header">
      <div class="container row">
        <a href="#">
          <img
            class="authenticated__logo"
            src="https://placeholder.pics/svg/140x50"
            alt=""
          />
        </a>
        <nav class="row authenticated__nav">
          <router-link class="link link--light" to="/">Logout</router-link>
        </nav>
      </div>
    </header>

    <section class="container authenticated__body">
      <slot />
    </section>

    <footer class="container authenticated__footer">
      <p>© 2020 This Dot. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Authenticated',
  props: {
    pageSubTitle: {
      type: String,
      default: 'Default',
    },
  },
};
</script>

<style lang="scss">
.authenticated {
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;

  a {
    display: inline-block;
  }

  &__header {
    background-color: $color1;
    color: $color8;
    padding: 1rem 0;
    min-height: 90px;
    width: 100%;
    text-align: center;
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

  &__body {
    flex: 1;
    padding: 20px;
    background: $color7;
    overflow-y: auto;
  }

  &__footer {
    height: 40px;
    padding: 10px 0;
    text-align: center;
    font-weight: bold;
    font-size: 0.8rem;
    background: $color7;
  }
}
</style>
