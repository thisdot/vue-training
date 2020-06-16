import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import Component from '@/components/3.sections/dashboard/create.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('create.vue', () => {
  let store;
  let actions;

  beforeEach(() => {
    actions = {
      addArticle: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  afterEach(() => {
    store = null;
  });

  it('should load a form with empty values', async () => {
    const expectedValues = {
      title: '',
      content: '',
    };

    const wrapper = mount(Component, {
      store,
    });

    const title = wrapper.find('#title').text();
    const content = wrapper.find('#content').text();
    expect(title).toBe(expectedValues.title);
    expect(content).toBe(expectedValues.content);
  });

  it('should load a form with empty values', async () => {
    const expectedValues = {
      title: 'title',
      content: 'content',
    };
    const expectedRouterPath = '/dashboard';
    const $router = {
      push: jest.fn(),
    };

    const wrapper = mount(Component, {
      store,
      localVue,
      mocks: {
        $router,
      },
    });

    wrapper.find('#title').setValue(expectedValues.title);
    wrapper.find('#content').setValue(expectedValues.content);

    wrapper.find('button').trigger('click');

    expect(actions.addArticle).toHaveBeenCalled();
    expect($router.push).toHaveBeenCalledWith(expectedRouterPath);
  });
});
