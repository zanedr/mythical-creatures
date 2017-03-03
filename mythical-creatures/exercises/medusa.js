function Medusa (name) {
  this.name = name;
  this.statues = [];
}

function Person (name) {
  this.name = name;
  this.stoned = false;
}

Medusa.prototype.stare = function (victim) {
  victim.stoned = true;
  this.statues.push(victim);
  this.statues.length <= 3 ? true : this.statues.shift().stoned = false;
}

module.exports = {Medusa, Person}
