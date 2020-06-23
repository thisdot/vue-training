import Vue from 'vue';

export default Vue.component('aria-button', {
  render: function() {
    const data = this.$slots.default[0].data;
    data.attrs['role'] = 'button';
    data.attrs['tabindex'] = 0;
    data.attrs['aria-pressed'] = false;
    return this.$slots.default[0];
  },
});
