import { Brewery, BreweryKey, BreweryValue } from '@/types';

import filter from '../filter/filter';

export default function filterSlowCallback(
  breweries: Brewery[],
  key: BreweryKey,
  value: BreweryValue,
  callback: (breweries: Brewery[]) => void // The generic callback takes a list of Brewery as only argument and returns nothing
) {
  setTimeout(() => {
    callback(filter(breweries, key, value));
  }, 1000);
}
