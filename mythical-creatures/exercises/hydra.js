function Hydra () {
  this.heads = [];
}

Hydra.prototype.growHead = function (obj) {
  var name = obj.name;
  console.log(obj.name);
  this.heads.push(name);
  console.log(this.heads);
}

module.exports = Hydra;
