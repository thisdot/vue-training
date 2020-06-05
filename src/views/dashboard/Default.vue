<template>
  <div class="default">
    <h3>List of Articles</h3>
    <ul>
      <li v-for="article in articles" :key="article.id">
        {{ article.title }}
      </li>
    </ul>
    <div v-if="randomArticle">
      <h3>Random Article</h3>
      <p class="random-article">
        {{ randomArticle.content }}
      </p>
      <router-link to="#">Show Full</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'Default',
  computed: {
    ...mapState({
      articles: state => state.articles.articles,
    }),
    ...mapGetters(['randomArticle']),
  },
  async created() {
    await this.getArticles();
  },
  methods: {
    ...mapActions(['getArticles']),
  },
};
</script>

<style lang="scss" scoped>
h3 {
  display: block;
  padding-top: 25px;
}

ul {
  margin: 0 0 0 20px;
}

a {
  display: inline-block;
  margin-top: 20px;
  cursor: pointer;
}

.random-article {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
