import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Translate from './mixins/Translation.mixin';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  mixins: [Translate],
  render: h => h(App),
  data: {
    locale: 'it',
  },
}).$mount('#app');
