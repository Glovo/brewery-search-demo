import { mount } from '@vue/test-utils';
import BrewerySearchInput from './BrewerySearchInput.vue';

describe('BrewerySearchInput', () => {
  it('should properly render the component', () => {
    const wrapper = mount(BrewerySearchInput);

    console.log(wrapper.html());
    expect(wrapper.exists()).toBeTruthy();
  });
});
