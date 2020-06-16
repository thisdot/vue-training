<template>
  <div id="layout1">
    <h1>{{ title }}</h1>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss">
#layout1 {
  max-width: 800px;
  min-height: 500px;
  padding: 24px;
  margin: 80px auto;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 1px 1px grey;

  & > h1 {
    display: block;
    background: black;
    color: white;
    margin: -24px -24px 24px -24px;
    padding: 24px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
}
</style>
