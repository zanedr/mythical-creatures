function Hobbit (name) {
  this.name = name;
  this.disposition = 'homebody';
  this.age = 0;
  this.adult = false;
  this.old = false;
  this.isShort = true;
  this.hasRing = (this.name === 'Frodo') ? true : false;
}

Hobbit.prototype.celebrateBirthday = function () {
  this.age++;
  this.adult = (this.age > 32) ? true : false;
  this.old = (this.age > 100) ? true : false;
}

module.exports = Hobbit;
