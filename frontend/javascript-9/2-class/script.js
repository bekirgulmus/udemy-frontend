class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login(){
    return `${this.username} giriş yaptı.`;
  }

  logout() {
    return `${this.username} çıkış yaptı.`;
  }
}

const userOne = new User('can', 'ccc@hotmail.com');
const userTwo = new User('nida', 'nida@hotmail.com');

console.log(userOne, userTwo);

console.log(userOne.login(), userTwo.logout());
