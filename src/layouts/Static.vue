<template>
  <div class="static">
    <Master>
      <template #header>
        <div class="container">
          <h1>{{ pageTitle }}</h1>
        </div>
      </template>
      <slot />
      <template #footer>
        <slot name="footer" />
      </template>
    </Master>
  </div>
</template>

<script>
import Master from '@/layouts/Master';

export default {
  name: 'Static',
  components: {
    Master,
  },
  props: {
    pageTitle: {
      type: String,
      default: 'Static Layout',
    },
  },
};
</script>
