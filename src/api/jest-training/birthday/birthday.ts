export default class Birthday {
  emailServer = {
    sendEmail: () => {
      console.log('Congratulation is your birthday');
    }
  };

  sendEmailWhenIsMyBirthday(name: string) {
    if (this.isMyBirthday(name)) {
      this.emailServer.sendEmail();
      this.logger('EmailSent');
    }
  }

  isMyBirthday(name: string): boolean {
    let result = false;
    const birthday = this.getBirthday(name);
    const today = new Date();
    if (
      today.getDate() === birthday.getDate() &&
      today.getMonth() === birthday.getMonth()
    ) {
      result = true;
    }
    return result;
  }

  getBirthday(name: string) {
    return this.randomDate();
  }

  randomDate(): Date {
    const year = new Date().getFullYear();
    const start = new Date(year, 0, 1);
    const end = new Date(year, 11, 31);
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  logger(message: string): void {
    console.log(message);
  }
}
