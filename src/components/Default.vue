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
  </div>
</template>

<script>
export default {
  name: 'Default',
  data() {
    return {
      filter: '',
      articles: [
        {
          id: 1,
          content:
            'Accessibility is the practice of making your websites usable by as many people as possible. We traditionally think of this as being about people with disabilities, but the practice of making sites accessible also benefits other groups such as those using mobile devices, or those with slow network connections.\n\nYou might also think of accessibility as treating everyone the same, and giving them equal opportunities, no matter what their ability or circumstances. Just as it is wrong to exclude someone from a physical building because they are in a wheelchair (modern public buildings generally have wheelchair ramps or elevators), it is also not right to exclude someone from a website because they have a visual impairment. We are all different, but we are all human, and therefore have the same human rights.',
          title: 'What is accessibility?',
        },
        {
          id: 2,
          content:
            'CSS stands for Cascading Style Sheets with an emphasis placed on “Style.” While HTML is used to structure a web document (defining things like headlines and paragraphs, and allowing you to embed images, video, and other media), CSS comes through and specifies your document’s style—page layouts, colors, and fonts are all determined with CSS. Think of HTML as the foundation (every house has one), and CSS as the aesthetic choices (there’s a big difference between a Victorian mansion and a mid-century modern home).',
          title: 'What is CSS?',
        },
        {
          id: 3,
          content:
            'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.',
          title: 'What is Vue.js?',
        },
        {
          id: 4,
          content:
            'JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.',
          title: 'What is JavaScript?',
        },
      ],
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
  },
  methods: {
    getArticleDetails(article) {
      if (!article) return;

      return `${article.content.substring(0, 160)} ...`;
    },
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
