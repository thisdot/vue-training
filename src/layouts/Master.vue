<template>
  <div class="master">
    <header class="master__header">
      <slot name="header" />
    </header>
    <section class="container master__content">
      <slot />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Master',
};
</script>

<style lang="scss" scoped>
.master {
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
