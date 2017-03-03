function Wizard (Obj={}) {
  this.name = Obj.name;
  this.bearded = (Obj.bearded != false) ? true : false;
  this.isRested = true;
  this.spellExhaustion = 0;
}

Wizard.prototype.incantation = function (spell) {
  var output;
  this.spellExhaustion++;
  this.spellExhaustion < 3 ? output = 'yay' : output = 'nay';
  switch (output) {
    case 'yay':
    this.isRested = true;
    return spell.toUpperCase();
    break;
    case 'nay':
    this.isRested = false;
    return 'I SHALL NOT CAST!'
    break;
  }
}

module.exports = Wizard;
