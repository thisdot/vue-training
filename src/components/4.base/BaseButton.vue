<template>
  <button
    class="base-button"
    @click="onClick"
    :class="{ secondary: isSecondary }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    isSecondary: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      console.log('Button clicked!');
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  border-radius: 30px;
  padding: 20px 40px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  outline: none;
  background-color: blue;
  color: white;
  border: none;

  &.secondary {
    background-color: white;
    color: lightgray;
    border: 1px solid blue;
  }
}
</style>
