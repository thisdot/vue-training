import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import BaseButton from '../components/0.base/BaseButton';

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

export const BaseButtonWithPrimary = () => ({
  components: {
    BaseButton,
  },
  props: {
    content: {
      default: text('Button Text', 'Click Me'),
    },
    primary: {
      default: boolean('Button Primary Color Scheme', true),
    },
    secondary: {
      default: boolean('Button Secondary Color Scheme', false),
    },
  },
  template: `<BaseButton :primary="primary" :secondary="secondary">{{ content }}</BaseButton>`,
});

export const BaseButtonWithSecondary = () => ({
  components: {
    BaseButton,
  },
  props: {
    content: {
      default: text('Button Text', 'Click Me'),
    },
    primary: {
      default: boolean('Button Primary Color Scheme', false),
    },
    secondary: {
      default: boolean('Button Secondary Color Scheme', true),
    },
  },
  template: `<BaseButton :primary="primary" :secondary="secondary">{{ content }}</BaseButton>`,
});
