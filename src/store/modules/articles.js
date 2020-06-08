import articles from './../../assets/articles';

const getRandomArticleId = () => Math.floor(Math.random() * 10) + 1;

export default {
  state: {
    articles: [],
    archivedArticles: [],
  },
  getters: {
    getArticle: state => id =>
      state.articles.find(article => article.id === id),
    randomArticle: state => state.articles[getRandomArticleId()],
  },
  mutations: {
    SET_ARTICLES(state, articles) {
      if (!articles) return;
      state.articles = articles;
    },
    REMOVE_FROM_ARTICLES(state, articleIndex) {
      state.articles.splice(articleIndex, 1);
    },
    ADD_TO_ARCHIVED(state, article) {
      state.archivedArticles.push(article);
    },
  },
  actions: {
    getArticles({ commit }) {
      setTimeout(() => {
        commit('SET_ARTICLES', articles);
      }, 500);
    },
    archiveArticle({ commit, state }, article_id) {
      const articleIndex = state.articles.findIndex(
        article => article.id == article_id,
      );
      if (articleIndex < 0) return;

      const article = state.articles[articleIndex];

      commit('REMOVE_FROM_ARTICLES', articleIndex);
      commit('ADD_TO_ARCHIVED', article);
    },
  },
};
