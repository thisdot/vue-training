<template>
  <button class="base-button" @click="onClick" :style="colorStyles">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    primary: {
      type: Boolean,
      default: true,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    colorStyles() {
      let objColor = { backgroundColor: '', color: '', border: 'none' };

      if (this.primary) {
        objColor['backgroundColor'] = 'blue';
        objColor['color'] = 'white';
      } else if (this.secondary) {
        objColor['backgroundColor'] = 'white';
        objColor['color'] = 'blue';
        objColor['border'] = '1px solid blue';
      } else {
        // default
        objColor['backgroundColor'] = 'blue';
        objColor['color'] = 'white';
      }

      return objColor;
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
}
</style>
