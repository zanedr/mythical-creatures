function Pirate (name, job) {
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.curseCount = 0;
    this.booty = 0;
}

Pirate.prototype.commitHeinousAct = function () {
    this.curseCount++;
    this.cursed = (this.curseCount >= 3) ? true : false;
}

Pirate.prototype.robShip = function () {
  this.booty+= 100;
  return 'YAARRR!';
}

module.exports = Pirate;
