function Werewolf (name, location) {
  this.name = name;
  this.location = location;
  this.human = true;
  this.wolf = false;
  this.hungry = false;
}

function Victim (name) {
  this.name = name;
  this.alive = true;
}

Werewolf.prototype.change = function () {
  this.human === true ? change = true : change = false;
  switch (change) {
    case true:
      this.human = false;
      this.wolf = true;
      this.hungry = true;
      break;
    case false:
      this.human = true;
      this.wolf = false;
      this.hungry = false;
      break;
  }
}

Werewolf.prototype.eat = function (victim) {
  this.human = (this.hungry == true) ? false : true;
  this.change();
}

module.exports = {Werewolf, Victim}
