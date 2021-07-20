import filterSlowPromise from './filter-slow-promise';

import { BreweryKey, BreweryValue } from '@/types'; // src/types folder
import { mockBreweries } from '../../__mocks__';

describe('filterSlowCallback', () => {
  let key: BreweryKey;
  let value: BreweryValue;

  describe('when passing a valid key|value', () => {
    // before running ANY test inside THIS describe statement
    beforeAll(() => {
      key = 'city';
      value = 'Dubuque';
    });

    it('should return the expected filtered list of breweries', async () => {
      const filteredBreweries = await filterSlowPromise(
        mockBreweries,
        key,
        value
      );

      expect(filteredBreweries).toEqual([
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
      ]);
    });
  });

  describe('when passing an invalid key|value', () => {
    beforeAll(() => {
      key = 'city';
      value = 'FAKE';
    });

    it('should return the same list of breweries', async () => {
      const filteredBreweries = await filterSlowPromise(
        mockBreweries,
        key,
        value
      );

      expect(filteredBreweries).toEqual(mockBreweries);
    });
  });

  describe('when passing a valid key|value, but an empty list', () => {
    beforeAll(() => {
      key = 'city';
      value = 'FAKE';
    });

    it('should return an empty list', async () => {
      const filteredBreweries = await filterSlowPromise([], key, value);

      expect(filteredBreweries).toEqual([]);
    });
  });
});
