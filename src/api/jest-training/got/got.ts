import { Quote } from './quote';
import { Characters } from './characters.enum';
import { House } from './house';

export class Got {
  async getRandomQuote(): Promise<Quote> {
    return fetch('https://game-of-thrones-quotes.herokuapp.com/v1/random').then(
      (response) => {
        return response.json() as Promise<Quote>;
      }
    );
  }

  async getHouse(house: string): Promise<House[]> {
    return fetch(
      `https://game-of-thrones-quotes.herokuapp.com/v1/house/${house}`
    ).then((response) => {
      return response.json() as Promise<House[]>;
    });
  }

  async isSentenceBy(name: Characters): Promise<boolean> {
    const quote = await this.getRandomQuote();
    if (quote?.character?.name === name) {
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  }

  isStark(name: Characters) {
    return name.includes('Stark');
  }

  async onlyForStark(name: Characters): Promise<House[]> {
    if (this.isStark(name)) {
      return await this.getHouse('stark');
    }
    return Promise.resolve([]);
  }
}
