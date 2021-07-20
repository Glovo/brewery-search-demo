import { Got } from './got';

import { Characters } from './characters.enum';

import { Quote } from './quote';

describe('Got', () => {
  let got: Got;

  beforeAll(() => {
    got = new Got();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('isSentenceBy', () => {
    const QUOTE: Quote = {
      sentence: 'fake',
      character: {
        name: Characters.AYRA_STARK,
        slug: 'fake',
        house: {
          name: 'house',
          slug: 'fake'
        }
      }
    };

    it('should return true', async () => {
      got.getRandomQuote = jest.fn().mockResolvedValue(QUOTE);

      const isIt = await got.isSentenceBy(Characters.AYRA_STARK);

      expect(isIt).toBe(true);
    });

    it('should return false', async () => {
      QUOTE.character.name = Characters.JAIME_LANNISTER;

      got.getRandomQuote = jest.fn().mockResolvedValue(QUOTE);

      const isIt = await got.isSentenceBy(Characters.AYRA_STARK);

      expect(isIt).toBe(false);
    });
  });

  describe('onlyForStark', () => {
    beforeAll(() => {
      got.getHouse = jest.fn().mockReturnValue('FAKE');
    });

    it('should call getHouse', async () => {
      got.isStark = jest.fn().mockReturnValue(true);

      await got.onlyForStark(Characters.AYRA_STARK);

      expect(got.getHouse).toBeCalled();
    });

    it('should not call getHouse', async () => {
      got.isStark = jest.fn().mockReturnValue(false);

      await got.onlyForStark(Characters.AYRA_STARK);

      expect(got.getHouse).not.toBeCalled();
    });
  });
});
