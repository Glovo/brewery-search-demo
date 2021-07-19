import Birthday from './birthday';

let birthday: Birthday;
describe('birthday.ts', () => {
  beforeAll(() => {
    birthday = new Birthday()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('test sendEmailWhenIsMyBirthday', () => {
    it('should call logger', () => {
      const spy = jest.spyOn(birthday, 'logger')
      jest.spyOn(birthday, 'isMyBirthday').mockReturnValue(true);
      birthday.sendEmailWhenIsMyBirthday('test')
      expect(spy).toHaveBeenCalled()
    })

    it('should not call logger', () => {
      const spy = jest.spyOn(birthday, 'logger')
      jest.spyOn(birthday, 'isMyBirthday').mockReturnValue(false);
      birthday.sendEmailWhenIsMyBirthday('test')
      expect(spy).not.toHaveBeenCalled()
    })
  })
})