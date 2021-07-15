import { fetchAutocompleteItems } from '@/api';
import { mount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';
import BrewerySearchInput from './BrewerySearchInput.vue';

jest.mock('@/api');

describe('BrewerySearchInput', () => {
  let wrapper: Wrapper<BrewerySearchInput>;

  beforeEach(() => {
    wrapper = mount(BrewerySearchInput);
  });

  it('should properly render the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render the input with a placeholder by default', () => {
    const input = wrapper.find('input');

    expect(input.attributes().placeholder).toBe('San Diego');
  });

  it('should render the submit button', () => {
    const button = wrapper.find('[data-qa="submit-button"]');

    expect(button.text()).toBe('Search');
  });

  it('should not render the dropdown as opened by default', () => {
    const autocompleteContainer = wrapper.find(
      '[data-qa="autocomplete-container"'
    );

    expect(autocompleteContainer.exists()).toBeFalsy();
  });

  describe('when we are searching something', () => {
    beforeEach(async () => {
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

    describe('and selecting a result from the autocomplete dropdown', () => {
      beforeEach(async () => {
        const autocompleteItems = wrapper
          .find('[data-qa="autocomplete-container"')
          .findAll('button');

        await autocompleteItems.at(0).trigger('click');
      });

      it('should notify the parent component', () => {
        expect(wrapper.emitted().search).toEqual([['First Brewery']]);
      });

      it('should reset the search field', () => {
        const input = wrapper.find('[data-qa="search-input"]');

        expect((input.element as HTMLInputElement).value).toBe('');
      });
    });
  });
});
