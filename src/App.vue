<template>
  <div id="app">
    <ariaButton>
      <button id="ciao">ciao</button>
    </ariaButton>
    <router-view />
  </div>
</template>
<script>
import ariaButton from '@/components/5.Renderers/aria-button.js';
export default {
  components: {
    ariaButton,
  },
};
</script>

<style lang="scss">
body {
  background: rgb(92, 109, 231);
  background: linear-gradient(
    45deg,
    rgba(92, 109, 231, 1) 0%,
    rgba(121, 94, 233, 1) 100%
  );
}
</style>
