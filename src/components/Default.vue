<template>
  <div class="default">
    <h1>List of Articles</h1>
    <ol class="default__articles">
      <li class="default__article">
        <h2 class="default__article-title">What is accessibility?</h2>
        <p class="default__article-content">
          Accessibility is the practice of making your websites usable by as
          many people as possible. We traditionally think of this as being about
          people with disabilities, but the practice of making sites accessible
          also benefits other groups such as those using mobile devices, or
          those with slow network connections.\n\nYou might also think of
          accessibility as treating everyone the same, and giving them equal
          opportunities, no matter what their ability or circumstances. Just as
          it is wrong to exclude someone from a physical building because they
          are in a wheelchair (modern public buildings generally have wheelchair
          ramps or elevators), it is also not right to exclude someone from a
          website because they have a visual impairment. We are all different,
          but we are all human, and therefore have the same human rights.
        </p>
      </li>
      <li class="default__article">
        <h2 class="default__article-title">What is CSS?</h2>
        <p class="default__article-content">
          CSS stands for Cascading Style Sheets with an emphasis placed on
          “Style.” While HTML is used to structure a web document (defining
          things like headlines and paragraphs, and allowing you to embed
          images, video, and other media), CSS comes through and specifies your
          document’s style—page layouts, colors, and fonts are all determined
          with CSS. Think of HTML as the foundation (every house has one), and
          CSS as the aesthetic choices (there’s a big difference between a
          Victorian mansion and a mid-century modern home).
        </p>
      </li>
    </ol>
  </div>
</template>

<script></script>

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
