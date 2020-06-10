export default {
  data() {
    return {
      logColour: {
        type: String,
        required: false,
        default: '#34FF00',
      },
      logBackground: {
        type: String,
        required: false,
        default: '#00Ff11',
      },
    };
  },
  mounted() {
    console.log(
      'Inside mounted(): %c Oh my heavens! ',
      'background: this.logColour; color: this.logBackground',
    );
  },
  updated() {
    console.log(
      'Inside updated(): %c Oh my heavens! ',
      'background: this.logColour; color: this.logBackground',
    );
  },
  methods: {
    log(message) {
      console.log('Inside Mixin:', message);
    },
  },
};
