<template>
  <div class="Article">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script>
import getArticles from '@/assets/articles.js';

export default {
  name: 'Article',
  data() {
    return {
      article: null,
    };
  },
  computed: {
    title() {
      return this.article && this.article.title;
    },
    content() {
      return this.article && this.article.content;
    },
  },
  async created() {
    const articles = await getArticles();
    this.article = articles.find(
      article => article.id === this.$route.params.article_id,
    );
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
h3 {
  padding-top: 25px;
  text-transform: capitalize;
}

button {
  margin-top: 20px;
  padding: 5px 10px;
  cursor: pointer;
}

p {
  padding-top: 25px;
}
</style>
