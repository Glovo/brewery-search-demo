import { fetchAutocompleteItems } from '@/api';
import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';
import BrewerySearchInput from './BrewerySearchInput.vue';

jest.mock('../api');

describe('BrewerySearchInput', () => {
  it('should properly render the component', () => {
    const wrapper = mount(BrewerySearchInput);

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

  describe('if we search something', () => {
    let wrapper: Wrapper<BrewerySearchInput>;

    beforeEach(async () => {
      wrapper = mount(BrewerySearchInput);

      const input = wrapper.find('[data-qa="search-input"]');
      await input.setValue('San');

      await Vue.nextTick();
    });

    it('should call the API with the proper query', async () => {
      expect(fetchAutocompleteItems).toHaveBeenCalledTimes(1);
      expect(fetchAutocompleteItems).toHaveBeenCalledWith('San');
    });

    it('should render the autocomplete dropdown with the values from the API', () => {
      const autocompleteContainer = wrapper.find(
        '[data-qa="autocomplete-container"'
      );
      const items = autocompleteContainer.findAll('button');

      expect(items.length).toBe(2);
      expect(items.at(0).text()).toBe('First Brewery');
      expect(items.at(1).text()).toBe('Second Brewery');
    });
  });
});
