import Vuex from 'vuex';

import user from './modules/user';
import articles from './modules/articles';

export default new Vuex.Store({
  modules: {
    articles,
    user,
  },
});
