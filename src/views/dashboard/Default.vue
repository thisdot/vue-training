<template>
  <div class="default">
    <h3>List of Articles</h3>
    <ol class="default__articles">
      <li
        class="default__article"
        v-for="article in articles"
        :key="article.id"
      >
        <router-link
          :to="{ name: 'Article', params: { article_id: article.id } }"
          class="default__article-title"
          >{{ article.title }}</router-link
        >
        <p class="default__article-content">{{ getArticleDetails(article) }}</p>
      </li>
    </ol>
    <div v-if="randomArticle">
      <h3>Random Article</h3>
      <p class="default__article-random-title">{{ randomArticle.title }}</p>
      <p class="default__article-random-content">{{ randomArticle.content }}</p>
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
    getArticleDetails(article) {
      if (!article) return;

      return `${article.content.substring(0, 160)} ...`;
    },
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
  cursor: pointer;
}

.default {
  padding-top: 10px;

  &__articles {
    margin-left: 20px;
  }

  &__article {
    padding-top: 25px;
  }

  &__article-title,
  &__article-random-title {
    text-transform: capitalize;
    font-weight: bold;
  }

  &__article-random-title {
    padding-top: 20px;
  }

  &__article-content,
  &__article-random-content {
    padding-top: 10px;
  }
}
</style>
