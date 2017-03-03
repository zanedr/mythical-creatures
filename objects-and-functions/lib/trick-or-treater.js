function TrickOrTreater (dressedUpAs) {
  this.dressedUpAs = dressedUpAs.style;
  this.bag = [];
  this.hasCandy = false;
  this.countCandies = 0;
}

TrickOrTreater.prototype.putCandyInBag = function (candy) {
  this.bag.push(candy);
  this.countCandies++;
  this.hasCandy = true;
  return this.bag.length;
}

TrickOrTreater.prototype.eat = function () {
  this.countCandies--;
  this.bag.shift();
  if (this.countCandies === 0) {
    this.hasCandy = false;
  }
  return this.bag.length;
}

module.exports = TrickOrTreater;
