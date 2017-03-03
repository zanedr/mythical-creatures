function Wizard (name) {
  this.name = name;
  this.pets = [];
  this.petsCount = 0;
  this.totalPets = "";
}

Wizard.prototype.givePet = function (pet) {
  this.pets.push(pet);
  this.petsCount++
}

Wizard.prototype.petList = function () {
  var length = this.pets.length;
  for (var i = 0; i < this.pets.length; i++){
      if ( i === (length - 1)) {
      this.totalPets = this.totalPets + this.pets[i].name + startWithVowel(this.pets[i].type) + '.'
      } else {
      this.totalPets = this.totalPets + this.pets[i].name + startWithVowel(this.pets[i].type) + ', '
      }
    }
    return this.totalPets;
}

function startWithVowel (pet) {
  if (pet.charAt(0) === 'a' ||
      pet.charAt(0) === 'e' ||
      pet.charAt(0) === 'i' ||
      pet.charAt(0) === 'o' ||
      pet.charAt(0) === 'u') {
    return ', an ' + pet;
  } else {
    return ', a ' + pet;
  }
}

Wizard.prototype.giveWand = function (wand) {
  this.wand = wand;
}

Wizard.prototype.castSpell = function (spell) {
  return 'Casting ' + spell + '!'
}

module.exports = Wizard;


// Wizard.prototype.petList = function () {
//   var length = this.pets.length;
//   for (var i = 0; i < this.pets.length; i++){
//     if ( i === (length - 1)) {
//     this.totalPets = this.totalPets + this.pets[i].name + ', an ' + this.pets[i].type + '.'
//     } else {
//     this.totalPets = this.totalPets + this.pets[i].name + ', a ' + this.pets[i].type + ', '
//     }
//   }
//   return this.totalPets;
// }
