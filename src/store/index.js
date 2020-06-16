import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import articles from './modules/articles';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    articles,
    user,
  },
});
