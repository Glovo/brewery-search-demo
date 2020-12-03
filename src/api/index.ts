import { Brewery } from '@/types/brewery';

const BASE_URL = 'https://api.openbrewerydb.org/breweries';

export async function fetchBreweries(): Promise<Brewery[]> {
  const result = await fetch(BASE_URL);

  return await result.json();
}

export async function searchBreweries(query: string): Promise<Brewery[]> {
  const result = await fetch(
    `${BASE_URL}/search?query=${query.replace('', '_')}`
  );

  return await result.json();
}
