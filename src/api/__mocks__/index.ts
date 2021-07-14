const mockBreweries = [
  {
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
    obdb_id: 'dimensional-brewing-co-dubuque',
    phone: null,
    postal_code: '52001',
    state: 'Iowa',
    street: null,
    updated_at: '2018-08-11T00:00:00.000Z',
    website_url: 'http://www.dimensionalbrewing.com'
  },
  {
    address_2: null,
    address_3: null,
    brewery_type: 'micro',
    city: 'Jackson',
    country: 'United States',
    county_province: null,
    created_at: '2018-07-24T00:00:00.000Z',
    id: 11767,
    latitude: '42.2188971',
    longitude: '-84.43762976',
    name: 'Ironbark Brewery',
    obdb_id: 'ironbark-brewery-jackson',
    phone: '5177487988',
    postal_code: '49203-4908',
    state: 'Michigan',
    street: '2610 Kibby Rd',
    updated_at: '2018-08-24T00:00:00.000Z',
    website_url: null
  }
];

const mockAutocompleteItems = [
  { id: '1', name: 'First Brewery' },
  { id: '2', name: 'Second Brewery' }
];

export const fetchBreweries = jest.fn().mockResolvedValue(mockBreweries);

export const searchBreweries = jest.fn().mockResolvedValue([mockBreweries[0]]);

export const fetchAutocompleteItems = jest
  .fn()
  .mockResolvedValue(mockAutocompleteItems);
