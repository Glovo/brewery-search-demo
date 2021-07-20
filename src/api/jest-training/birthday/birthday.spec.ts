import Birthday from './birthday';

describe('birthday.ts', () => {
  let birthday: Birthday;
  let loggerSpy: unknown;

  beforeAll(() => {
    birthday = new Birthday();
    loggerSpy = jest.spyOn(birthday, 'logger');
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('test isMyBirthday', () => {
    const dateOne = new Date(2021, 1, 1);

    beforeAll(() => {
      jest.spyOn(Date, 'now').mockReturnValue(dateOne.getTime());
    });

    it('should call logger', () => {
      birthday.getBirthday = jest.fn().mockReturnValue(dateOne);
      // jest.spyOn(birthday, 'getBirthday').mockReturnValue(dateOne);

      birthday.isMyBirthday();

      expect(loggerSpy).toHaveBeenCalled();
    });

    it('should not call logger', () => {
      const dateTwo = new Date(2021, 1, 2);

      birthday.getBirthday = jest.fn().mockReturnValue(dateTwo);
      // jest.spyOn(birthday, 'getBirthday').mockReturnValue(dateTwo);

      birthday.isMyBirthday();

      expect(loggerSpy).not.toHaveBeenCalled();
    });
  });

  describe('test sendEmailWhenIsMyBirthday', () => {
    it('should call logger', () => {
      birthday.isMyBirthday = jest.fn().mockReturnValue(true);
      // jest.spyOn(birthday, 'isMyBirthday').mockReturnValue(true);

      birthday.sendEmailWhenIsMyBirthday();

      expect(loggerSpy).toHaveBeenCalled();
    });

    it('should not call logger', () => {
      birthday.isMyBirthday = jest.fn().mockReturnValue(false);
      // jest.spyOn(birthday, 'isMyBirthday').mockReturnValue(false);

      birthday.sendEmailWhenIsMyBirthday();

      expect(loggerSpy).not.toHaveBeenCalled();
    });
  });
});
