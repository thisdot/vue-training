<template>
  <div>
    <p class="title">{{ title }}</p>
    <p class="content">{{ articleExtract }}</p>
    <router-link :to="{ name: 'Article', params: { article_id } }" class="">
      Read All
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'RandomArticle',
  props: {
    article_id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  computed: {
    articleExtract() {
      return `${this.content.substring(0, 300)} ...`;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-transform: capitalize;
  font-weight: bold;
}

.content {
  padding-top: 10px;
}
</style>
