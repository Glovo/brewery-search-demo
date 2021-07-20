import { Brewery, BreweryKey } from '@/types';

export default function sortBy(breweries: Brewery[], key: BreweryKey) {
  return breweries.sort((a, b) => {
    const valA = a[key] || '';
    const valB = b[key] || '';

    if (valA === valB) {
      return 0;
    }

    return valA > valB ? 1 : -1;
  });
}
