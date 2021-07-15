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
  website_url: string;
  updated_at: string;
  created_at: string;
}
