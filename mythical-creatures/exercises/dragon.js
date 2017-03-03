function Dragon (name, rider, color) {
  this.name = name;
  this.rider = rider;
  this.color = color;
  this.hungry = true;
  this.ate = 0;
}

Dragon.prototype.eat = function () {
  this.ate++;
  if (this.ate >= 3) {
    this.hungry = false;
  }
}

module.exports = Dragon;
