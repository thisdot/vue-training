<template>
  <div class="default">
    <h3>List of Articles</h3>
    <ul>
      <li v-for="article in articles" :key="article.id">
        {{ article.content }}
      </li>
    </ul>
    <h3>Random Article</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque
      ultricies consectetur. Maecenas mollis erat ac odio fermentum dapibus.
      Mauris vitae pulvinar eros. Vivamus scelerisque tortor lectus, at suscipit
      lorem pulvinar id. Nulla semper, dolor at ultrices posuere, risus
    </p>
    <router-link to="#">Show Full Article</router-link>
  </div>
</template>

<script>
export default {
  name: 'Default',
  components: {},
  data() {
    return {
      articles: [
        {
          id: 1,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 2,
          content: 'Nullam mollis tellus in augue sollicitudin placerat.',
        },
        {
          id: 3,
          content: 'Donec tincidunt felis ut diam dapibus semper.',
        },
        {
          id: 4,
          content: 'Suspendisse nec diam ac metus ultrices commodo.',
        },
      ],
    };
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
</style>
