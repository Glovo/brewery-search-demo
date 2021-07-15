import { mount } from '@vue/test-utils';
import BrewerySearchInput from './BrewerySearchInput.vue';

describe('BrewerySearchInput', () => {
  it('should properly render the component', () => {
    const wrapper = mount(BrewerySearchInput);

    console.log(wrapper.html());
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render the input with a placeholder by default', () => {
    const wrapper = mount(BrewerySearchInput);

    const input = wrapper.find('input');

    expect(input.attributes().placeholder).toBe('San Diego');
  });

  it('should render the submit button', () => {
    const wrapper = mount(BrewerySearchInput);

    const button = wrapper.find('[data-qa="submit-button"]');

    expect(button.text()).toBe('Search');
  });
});
