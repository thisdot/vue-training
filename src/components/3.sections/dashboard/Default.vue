<template>
  <div class="default">
    <h2>List of Articles</h2>
    <div class="default__filter">
      <input
        type="text"
        v-model="filter"
        placeholder="Type to filter articles "
      />
    </div>
    <ol v-if="filteredArticles.length > 0" class="default__articles">
      <li
        class="default__article"
        v-for="article in filteredArticles"
        :key="article.id"
      >
        <h3 class="default__article-title">{{ article.title }}</h3>
        <p class="default__article-content">{{ getArticleDetails(article) }}</p>
      </li>
    </ol>
    <p v-else class="default__no-data">No data matching your filter!</p>
    <div v-if="randomArticle">
      <h3>Random Article</h3>
      <RandomArticle
        class="default__random-article"
        :article_id="randomArticle.id"
        :title="randomArticle.title"
        :content="randomArticle.content"
      />
    </div>
  </div>
</template>

<script>
import RandomArticle from '../../4.base/dashboard.randomArticle';
import getArticles from '@/assets/articles.js';

export default {
  name: 'Default',
  components: {
    RandomArticle,
  },
  data() {
    return {
      filter: '',
      articles: [],
    };
  },
  computed: {
    filteredArticles() {
      return this.articles.filter(article => {
        const content = article.content.toLowerCase();
        const title = article.title.toLowerCase();
        const filter = this.filter.toLowerCase();

        return content.includes(filter) || title.includes(filter);
      });
    },
    randomArticle() {
      if (this.articles.length === 0) return;
      const randomArticleId = this.getRandomArticleId(this.articles.length);
      return this.articles.find(article => article.id === randomArticleId);
    },
  },
  methods: {
    getArticleDetails(article) {
      if (!article) return;

      return `${article.content.substring(0, 160)} ...`;
    },
    getRandomArticleId(length) {
      return Math.floor(Math.random() * length) + 1;
    },
  },
  async created() {
    this.articles = await getArticles();
  },
};
</script>

<style lang="scss" scoped>
.default {
  padding-top: 10px;

  &__filter {
    margin: auto;
    width: 200px;

    input {
      height: 50px;
      padding: 5px;
      outline: none;
      font-size: 1rem;
    }
  }

  &__no-data {
    display: block;
    text-align: center;
    font-weight: bold;
    line-height: 2rem;
    font-size: 1rem;
    padding: 25px 0;
  }

  &__articles {
    margin-left: 20px;
  }

  &__article {
    padding-top: 25px;
  }

  &__article-title {
    text-transform: capitalize;
    font-weight: bold;
  }

  &__article-content {
    padding-top: 10px;
  }

  &__random-article {
    padding-top: 20px;
  }
}

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
</style>
