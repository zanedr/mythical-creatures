function Bag() {
  this.empty = true;
  this.count = 0;
  this.candies = [];
};

Bag.prototype.push = function(input) {
  this.candies.push(input);
  this.count = this.candies.length;
}

Bag.prototype.contains = function (type) {
  if(this.candies[0].type == type) {
    return true;
  } else {
    return false;
  }
}

module.exports = Bag;
