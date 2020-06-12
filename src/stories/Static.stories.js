import { withKnobs, text } from '@storybook/addon-knobs';
import Static from '../layouts/Static';

export default {
  title: 'Static Layout',
  decorators: [withKnobs],
  parameters: {
    notes:
      'The Static Layout component Storybook Stories to demonstrate how to use this component.',
  },
};

export const StaticLayoutTitleOnly = () => ({
  components: {
    Static,
  },
  props: {
    title: {
      default: text('Page Title', 'About Us'),
    },
  },
  template: `
        <div style="padding: 20px; background: lightblue;">
            <Static :title="title" />
        </div>
    `,
});

export const StaticLayoutTitleAndContent = () => ({
  components: {
    Static,
  },
  props: {
    title: {
      default: text('Page Title', 'About Us'),
    },
    content: {
      default: text('Page Content', 'This is the About Us page ....'),
    },
  },
  template: `
        <div style="padding: 20px; background: lightblue;">
            <Static :title="title">
                {{ content }}
            </Static>
        </div>
    `,
});
