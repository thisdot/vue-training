<template>
  <button class="base-button" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
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
  background-color: #187bcd;
  color: #fff;
}
</style>
