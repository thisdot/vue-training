export default {
  data() {
    return {
      logColour: '#34FF00',
      logBackground: '#00Ff11',
    };
  },
  mounted() {
    console.log(
      'Inside mounted(): %s Oh my heavens!',
      `background: ${this.logBackground}; color: ${this.logColour}`,
    );
  },
  updated() {
    console.log(
      'Inside updated(): %s Oh my heavens!',
      `background: ${this.logBackground}; color: ${this.logColour}`,
    );
  },
  methods: {
    log(message) {
      console.log('Inside Mixin:', message);
    },
  },
};
