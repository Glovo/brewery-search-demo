import { mount } from '@vue/test-utils';
import App from './App.vue';

jest.mock('./api');

describe('App', () => {
  it('should render the whole app', () => {
    const wrapper = mount(App);

    console.log(wrapper.html());

    expect(wrapper.exists()).toBeTruthy();
  });
});
