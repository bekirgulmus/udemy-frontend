class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login(){
    console.log(`${this.username} giriş yaptı.`);
    return this;
  }

  logout() {
    console.log(`${this.username} çıkış yaptı.`);
    return this;
  }
}

const userOne = new User('can', 'ccc@hotmail.com');
const userTwo = new User('nida', 'nida@hotmail.com');

userTwo.login().logout()
