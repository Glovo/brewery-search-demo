import { Brewery } from '@/types/brewery';

const BASE_URL = 'https://api.openbrewerydb.org/breweries';

export async function searchBrewery(query: string): Promise<Brewery[]> {
  const result = await fetch(
    `${BASE_URL}/search?query=${query.replace('', '_')}`
  );

  return await result.json();
}
