<template>
  <div class="master">
    <header class="master__header">
      <slot name="header" />
    </header>
    <section class="container master__body">
      <slot />
    </section>
    <footer class="master__footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Master',
};
</script>

<style lang="scss">
.master {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  @include flex(column, nowrap, space-between, stretch);

  &__header {
    background-color: #23424a;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
  }

  &__body {
    flex: 1;
    padding: 20px 0;
    background: $color7;
    overflow-y: auto;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &__footer {
    height: 40px;
    padding: 10px 0;
    text-align: center;
    font-weight: bold;
    font-size: 0.8rem;
  }
}
</style>
