<template>
  <label :for="id">{{ label }}</label>
  <input
    :id="id"
    :class="className"
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.bold {
  border-width: 3px;
}
</style>
