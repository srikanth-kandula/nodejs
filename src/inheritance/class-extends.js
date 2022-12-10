function Person() {
  this.name = 'myname';
  this.gender = 'mygender';
};

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
}

class Police extends Person {
  constructor() {
    super(); //must be called so that 'this' is accessible within the current class
    this.badgeNum = 12345;
  }
}

let police = new Police();
police.greet();