<template>
  <div class="master">
    <header class="master__header">
      <slot name="header" />
    </header>
    <section class="container master__body">
      <slot />
    </section>
    <footer class="container master__footer">
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
    min-height: 90px;
  }

  &__body {
    flex: 1;
    padding: 20px 0;
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
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      display: block;
      margin: 0 auto;
      width: 90%;
      height: 100%;
      border-top: 1px solid $primary;
    }
  }
}
</style>
