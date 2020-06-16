import { RouterLinkStub, shallowMount } from '@vue/test-utils';
import Component from '@/components/4.base/dashboard.randomArticle.vue';

describe('dashboard.randomArticle.vue', () => {
  it('renders props when rendered', () => {
    const props = {
      title: 'my title',
      content: 'my specific content',
      article_id: 0,
    };

    const wrapper = shallowMount(Component, {
      propsData: props,
      stubs: { RouterLink: RouterLinkStub },
    });

    expect(wrapper.find('.title').element.textContent).toMatch(props.title);
    expect(wrapper.find('.content').element.textContent).toMatch(props.content);
  });

  it('truncate content if too big', () => {
    const props = {
      title: 'my title',
      content:
        'Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content. Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.',
      article_id: 0,
    };

    const wrapper = shallowMount(Component, {
      propsData: props,
      stubs: { RouterLink: RouterLinkStub },
    });

    expect(wrapper.find('.content').element.textContent.length).toBeLessThan(
      props.content.length,
    );
  });

  it('render a link that will redirect to article', () => {
    const props = {
      title: 'my title',
      content: 'my specific content',
      article_id: 0,
    };

    const wrapper = shallowMount(Component, {
      propsData: props,
      stubs: { RouterLink: RouterLinkStub },
    });

    expect(wrapper.find(RouterLinkStub).props().to.name).toBe('Article');
    expect(wrapper.find(RouterLinkStub).props().to.params.article_id).toBe(
      props.article_id,
    );
  });
});
