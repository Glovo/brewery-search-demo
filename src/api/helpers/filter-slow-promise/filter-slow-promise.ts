import { Brewery, BreweryKey, BreweryValue } from '@/types';

import filter from '../filter/filter';

export default function filterSlowPromise(
  breweries: Brewery[],
  key: BreweryKey,
  value: BreweryValue
): Promise<Brewery[]> {
  // The function returns a Promise which resolves with a list of Brewery
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filter(breweries, key, value));
    }, 1000);
  });
}
