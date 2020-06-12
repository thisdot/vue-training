import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import BaseButton from '../components/BaseButton';

export default {
  title: 'Base Button',
  decorators: [withKnobs, withA11y],
  parameters: {
    notes: {
      Introduction:
        "Base Button Storybook Stories demonstrating the button's features.",
      Usage: `
          How to use the button?
          
          < BaseButton >Click Me </ BaseButton >
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
