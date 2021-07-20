import { Brewery, BreweryKey, BreweryValue } from '@/types';

export default function filter(
  breweries: Brewery[],
  key: BreweryKey,
  value: BreweryValue
) {
  return breweries.filter((brewery) => brewery[key] !== value);
}
