import { Brewery } from '@/types';

export default function fullAddress({ city, name, state, street }: Brewery) {
  const nameStreetCity = [];

  if (name) {
    nameStreetCity.push(name);
  }

  if (street) {
    nameStreetCity.push(street);
  }

  if (city) {
    nameStreetCity.push(city);
  }

  // Using the ES6 templating capabilities together with a ternary operator to fallback the state to empty string
  return `${nameStreetCity.join(', ')} ${state ? `(${state})` : ''}`;

  // Longer verbose alternative

  // const jointNameStreetCity = nameStreetCity.join(', ');
  // const formattedState = state ? `(${state})` : '';
  // const result = `${jointNameStreetCity} ${formattedState}`;
  // return result;
}
