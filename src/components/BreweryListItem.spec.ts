import { Brewery } from '@/types';
import { mount } from '@vue/test-utils';
import BreweryListItem from './BreweryListItem.vue';

const mockBrewery: Brewery = {
  address_2: null,
  address_3: null,
  brewery_type: 'planning',
  city: 'Dubuque',
  country: 'United States',
  county_province: null,
  created_at: '2018-07-24T00:00:00.000Z',
  id: 10186,
  latitude: null,
  longitude: null,
  name: 'Dimensional Brewing Co.',
  phone: null,
  postal_code: '52001',
  state: 'Iowa',
  street: null,
  updated_at: '2018-08-11T00:00:00.000Z',
  website_url: 'http://www.dimensionalbrewing.com'
};

describe('BreweryListItem', () => {
  it('should render a brewery card', () => {
    const wrapper = makeWrapper();

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should display the brewery name', () => {
    const wrapper = makeWrapper();

    const heading = wrapper.find('[data-qa="brewery-name"]');

    console.log(heading.html());
    expect(heading.text()).toBe('Dimensional Brewing Co.');
  });

  it('should display an icon next to the address', () => {
    const wrapper = makeWrapper();

    const address = wrapper.find('[data-qa="brewery-address"]');
    const icon = address.find('svg');

    expect(icon.exists()).toBeTruthy();
  });

  it('should not display the phone number if it is null', () => {
    const wrapper = makeWrapper();

    const phoneNumber = wrapper.find('[data-qa="brewery-phone"');

    expect(phoneNumber.exists()).toBeFalsy();
  });

  it('should display the phone number if it has', () => {
    const breweryWithPhone = {
      ...mockBrewery,
      phone: '1234'
    };

    const wrapper = makeWrapper({ brewery: breweryWithPhone });

    const phoneNumber = wrapper.find('[data-qa="brewery-phone"');

    expect(phoneNumber.exists()).toBeTruthy();
  });
});

const makeWrapper = (
  propsData: { brewery: Brewery } = { brewery: mockBrewery }
) => mount(BreweryListItem, { propsData });
