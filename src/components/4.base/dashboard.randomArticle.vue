<template>
  <div>
    <p class="title">{{ title }}</p>
    <p class="content">{{ content }}</p>
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
