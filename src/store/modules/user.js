export default {
  state: {
    username: localStorage.getItem('username') || '',
    peferredLanguage: 'en',
  },
  getters: {
    isLoggedIn: state => !!state.username,
  },
  mutations: {
    SET_NAME(state, username) {
      state.name = username;
    },
  },
  actions: {
    login({ commit }, username) {
      return new Promise(resolve => {
        setTimeout(() => {
          localStorage.setItem('username', username);

          commit('SET_NAME', username);

          resolve();
        }, 500);
      });
    },
  },
  modules: {},
};
