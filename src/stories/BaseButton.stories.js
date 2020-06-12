import { withKnobs, text } from '@storybook/addon-knobs';
import BaseButton from '../components/BaseButton';

export default {
  title: 'Base Button',
  decorators: [withKnobs],
  parameters: {
    notes: {
      Introduction:
        "Base Button Storybook Stories demonstrating the button's features.",
      Usage: `
          How to use the button?
          
          < BaseButton >Click ME </ BaseButton >
        `,
    },
  },
};

export const BaseButtonWithKnobs = () => ({
  components: {
    BaseButton,
  },
  props: {
    content: {
      default: text('Button Text', 'Click Me'),
    },
  },
  template: `<BaseButton>{{ content }}</BaseButton>`,
});
