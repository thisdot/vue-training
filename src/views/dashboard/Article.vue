<template>
  <div class="Article">
    <h3>{{ title }}</h3>
    <button @click.prevent="archive">Archive Article</button>
    <p>{{ content }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

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
  created() {
    this.article = this.$store.getters.getArticle(
      this.$route.params.article_id,
    );
  },
  methods: {
    ...mapActions(['archiveArticle']),
    archive() {
      return null;
    },
  },
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
