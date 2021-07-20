import sortBy from './sortBy';

import { BreweryKey } from '@/types'; // src/types folder
import { mockBreweries } from '../../__mocks__';

describe('sortBy', () => {
  let key: BreweryKey;

  describe('when passing a valid key', () => {
    // before running ANY test inside THIS describe statement
    beforeAll(() => {
      key = 'brewery_type';
    });

    it('should return the expected filtered list of breweries', () => {
      // It's expected to have the breweries inverted
      expect(sortBy(mockBreweries, key)).toEqual([
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
        },
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
        }
      ]);
    });
  });

  //   NO NEED for this one cause is caught by Typescript, try to uncomment it and see the TS error
  //   describe('when passing an invalid key', () => {
  //     beforeAll(() => {
  //       key = 'FAKE';
  //     });

  //     it('should return the same list of breweries', () => {
  //       expect(sortBy(mockBreweries, key)).toEqual(mockBreweries);
  //     });
  //   });

  describe('when passing a key that has the same value', () => {
    beforeAll(() => {
      key = 'state';
    });

    it('should return the same list of breweries', () => {
      expect(sortBy(mockBreweries, key)).toEqual(mockBreweries);
    });
  });

  describe('when passing a valid key, but an empty list', () => {
    beforeAll(() => {
      key = 'city';
    });

    it('should return an empty list', () => {
      expect(sortBy([], key)).toEqual([]);
    });
  });
});
