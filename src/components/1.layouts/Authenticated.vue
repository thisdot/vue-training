<template>
  <div id="layout2">
    <div class="header">
      <a href="/">
        <img
          class="authenticated__logo"
          src="https://placeholder.pics/svg/140x50"
          alt="vue training logo"
        />
      </a>
      <nav class="row authenticated__nav">
        <a class="link link--light" @click="$emit('logout')">Logout</a>
      </nav>
    </div>
    <slot />
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
#layout2 {
  max-width: 800px;
  min-height: 500px;
  padding: 24px;
  margin: 80px auto;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 1px 1px grey;
  overflow-y: auto;

  .header {
    background: black;
    color: white;
    margin: -24px -24px 24px -24px;
    padding: 24px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    cursor: pointer;
  }
}
</style>
