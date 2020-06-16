export default {
  data() {
    return {
      logColour: '#031a04',
      logBackground: '#00Ff11',
    };
  },
  mounted() {
    this.log('mounted()', 'On my heavens!');
  },
  updated() {
    this.log('updated()', 'On my heavens!');
  },
  methods: {
    log(source, message) {
      console.log(
        `%c Mixin: Inside ${source} - ${message}`,
        `background: ${this.logBackground}; color: ${this.logColour}`,
      );
    },
  },
};
