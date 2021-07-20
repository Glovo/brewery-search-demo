export default class Birthday {
  emailServer = {
    sendEmail: () => {
      console.log('Congratulation is your birthday');
    }
  };

  sendEmailWhenIsMyBirthday() {
    if (this.isMyBirthday()) {
      this.emailServer.sendEmail();
      this.logger('EmailSent');
    }
  }

  isMyBirthday(): boolean {
    let result = false;
    const birthday = this.getBirthday();
    const today = new Date(Date.now());

    if (
      today.getDate() === birthday.getDate() &&
      today.getMonth() === birthday.getMonth()
    ) {
      this.logger('is a birthday');
      result = true;
    }

    return result;
  }

  getBirthday() {
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
