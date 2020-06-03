<template>
  <div class="static">
    <header class="static__header">
      <div class="container">
        <h1>{{ pageTitle }}</h1>
      </div>
    </header>

    <section class="container static__content">
      <slot />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Static',
  props: {
    pageTitle: {
      type: String,
      default: 'Static Layout',
    },
  },
};
</script>

<style lang="scss" scoped>
.static {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;

  &__header {
    background-color: #23424a;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
  }

  &__content {
    height: 100%;
    padding-top: 20px;
    background: $color7;
    overflow-y: auto;
  }
}
</style>
