<template>
  <div class="create">
    <h3>Create an Article</h3>
    <BaseInput
      id="title"
      v-model:modelValue="article.title"
      label="Title:"
      type="text"
      role="textbox"
      class="bold"
    />
    <BaseInput
      id="content"
      v-model:modelValue="article.content"
      label="Content:"
    />
    <button @click="submit">
      Create & Redirect
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import BaseInput from '@/components/4.base/BaseInput';

export default {
  name: 'Create',
  components: {
    BaseInput,
  },
  data() {
    return {
      article: {
        title: '',
        content: '',
      },
    };
  },
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
