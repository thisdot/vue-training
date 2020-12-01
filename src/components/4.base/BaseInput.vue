<template>
  <div>
    <label :for="$attrs.id">{{ label }}</label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
};
</script>

<style lang="scss">
.bold {
  border-width: 3px;
}
</style>
