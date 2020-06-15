<template>
  <div class="create">
    <h3>Create an Article</h3>
    <label for="title">Title</label>
    <input type="text" id="title" v-model="article.title" />
    <label for="content">Content</label>
    <input type="text" id="content" v-model="article.content" />
    <button @click="submit">Create & Redirect</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Create',
  data() {
    return {
      article: {
        title: '',
        content: '',
      },
    };
  },
  components: {},
  methods: {
    ...mapActions(['addArticle']),
    submit() {
      this.addArticle(this.article);
      this.$router.push('/dashboard');
    },
  },
};
</script>

<style lang="scss">
.create {
  label {
    display: block;
    font-weight: bold;
  }

  input {
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
  }

  button {
    display: block;
    margin-top: 15px;
    border: 1px solid $primary;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    text-decoration: none;
  }
}
</style>
