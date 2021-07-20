export interface Brewery {
  id: number;
  name: string;
  brewery_type: string;
  street: string | null;
  address_2: string | null;
  address_3: string | null;
  city: string;
  county_province: string | null;
  state: string;
  postal_code: string;
  country: string;
  longitude: string | null;
  latitude: string | null;
  phone: string | null;
  website_url: string | null;
  updated_at: string;
  created_at: string;
}

export type BreweryKey = keyof Brewery; // https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#the-keyof-type-operator

export type BreweryValue = string | number | null; // possible values of Brewery fields
