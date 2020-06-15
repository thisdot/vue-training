import getArticles from './../../assets/articles';

const getRandomArticleId = length => Math.floor(Math.random() * length) + 1;

export default {
  state: {
    articles: [],
    archivedArticles: [],
  },
  getters: {
    getArticle: state => id =>
      state.articles.find(article => article.id === id),
    randomArticle: state => {
      if (state.articles.length === 0) return;
      const randomArticleId = getRandomArticleId(state.articles.length);
      return state.articles.find(article => article.id === randomArticleId);
    },
  },
  mutations: {
    SET_ARTICLES(state, articles) {
      if (!articles) return;
      state.articles = articles;
    },
    ADD_ARTICLE(state, article) {
      state.articles = [...state.articles, article];
    },
    REMOVE_FROM_ARTICLES(state, articleIndex) {
      state.articles.splice(articleIndex, 1);
    },
    ADD_TO_ARCHIVED(state, article) {
      state.archivedArticles = [...state.articles, article];
    },
  },
  actions: {
    async getArticles({ commit }) {
      const articles = await getArticles();
      commit('SET_ARTICLES', articles);
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
    addArticle({ commit }, article) {
      commit('ADD_ARTICLE', article);
    },
  },
};
