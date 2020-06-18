import Vue from 'vue';
//Here you could import your translation files
const text = {
  en: {
    direction: 'ltr',
    welcome: 'Welcome',
    about: 'About',
  },
  it: {
    direction: 'rtl',
    welcome: 'Benvenuto',
  },
};

export default Vue.mixin({
  data() {
    return {
      defaultLocale: 'en',
    };
  },
  computed: {
    currentDirection() {
      return text[this.$root.locale].direction;
    },
  },
  methods: {
    $t(key) {
      const textInCurrentLocale = text[this.$root.locale][key];
      return textInCurrentLocale || text[this.$root.defaultLocale][key];
    },
  },
});
