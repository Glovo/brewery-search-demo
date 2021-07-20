import fullAddress from './full-address';

import { Brewery } from '@/types'; // src/types folder
import { mockBreweries } from '../../__mocks__';

describe('fullAddress', () => {
  let brewery: Brewery;

  describe('when passing a brewery with all the fields', () => {
    // before running ANY test inside THIS describe statement
    beforeAll(() => {
      brewery = mockBreweries[1];
    });

    it('should return the expected full address', () => {
      expect(fullAddress(brewery)).toBe(
        'Ironbark Brewery, 2610 Kibby Rd, Jackson (Michigan)'
      );
    });
  });

  describe('when passing a brewery without street field', () => {
    // before running ANY test inside THIS describe statement
    beforeAll(() => {
      brewery = mockBreweries[0];
    });

    it('should return the expected full address', () => {
      expect(fullAddress(brewery)).toBe(
        'Dimensional Brewing Co., Dubuque (Iowa)'
      );
    });
  });
});
