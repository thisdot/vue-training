import articles from './../../assets/articles';

const getRandomArticleId = () => Math.floor(Math.random() * 10) + 1;

export default {
  state: {
    articles: [],
    archivedArticles: [],
  },
  getters: {
    randomArticle: state => state.articles[getRandomArticleId()],
  },
  mutations: {
    SET_ARTICLES(state, articles) {
      if (!articles) return;
      state.articles = articles;
    },
  },
  actions: {
    async getArticles({ commit }) {
      setTimeout(() => {
        commit('SET_ARTICLES', articles);
      }, 500);
    },
  },
  modules: {},
};
