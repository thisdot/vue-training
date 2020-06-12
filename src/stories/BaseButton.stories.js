import { withKnobs, text } from '@storybook/addon-knobs';
import BaseButton from '../components/BaseButton';

export default {
  title: 'Base Button',
  decorators: [withKnobs],
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
