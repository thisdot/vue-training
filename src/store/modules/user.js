export default {
  state: {
    username: localStorage.getItem('vue-training-username') || '',
    peferredLanguage: 'en',
  },
  getters: {
    isLoggedIn: state => !!state.username,
  },
  mutations: {
    SET_NAME(state, username) {
      state.username = username;
    },
  },
  actions: {
    login({ commit }, username) {
      return new Promise(resolve => {
        setTimeout(() => {
          localStorage.setItem('vue-training-username', username);

          commit('SET_NAME', username);

          resolve();
        }, 500);
      });
    },
    async logout({ commit }) {
      localStorage.removeItem('vue-training-username');
      commit('SET_NAME', '');
    },
  },
};
