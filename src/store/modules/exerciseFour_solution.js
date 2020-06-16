import { getJoke, getJokes } from './../../assets/jokes.js';

export default {
  state: {
    jokes: [],
  },
  getters: {
    getJoke: state => id => state.jokes.find(joke => joke.id === id), //to use a getter, we need to make sure that jokes are always retrieved on load!
  },
  mutations: {
    SET_JOKES(state, jokes) {
      state.jokes = jokes;
    },
  },
  actions: {
    async getJokes({ commit }) {
      const jokes = await getJokes();
      commit('SET_JOKES', jokes);
    },
    // eslint-disable-next-line no-unused-vars
    async getJoke({ commit }, joke_id) {
      // eslint-disable-line no-unused-vars
      const joke = await getJoke(joke_id); //we can use this approach in the case in which we do not want to retrieve the full list on load
      return joke;
    },
  },
};
