import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import BaseButton from '../components/4.base/BaseButton';

export default {
  title: 'Base Button',
  decorators: [withKnobs, withA11y],
  parameters: {
    notes: {
      Introduction:
        "Base Button Storybook Stories demonstrating the button's features.",
      Usage: `
          How to use the button?
          
          <BaseButton >Click Me</ BaseButton >
        `,
    },
  },
};

export const BaseButtonWithPrimary = () => ({
  components: {
    BaseButton,
  },
  props: {
    content: {
      default: text('Button Text', 'Click Me'),
    },
    secondary: {
      default: boolean('Button Secondary Color Scheme', false),
    },
  },
  template: '<BaseButton :isSecondary="secondary" >{{ content }}</BaseButton>',
});

export const BaseButtonWithSecondary = () => ({
  components: {
    BaseButton,
  },
  props: {
    content: {
      default: text('Button Text', 'Click Me'),
    },
    secondary: {
      default: boolean('Button Secondary Color Scheme', true),
    },
  },
  template: '<BaseButton :isSecondary="secondary" >{{ content }}</BaseButton>',
});
