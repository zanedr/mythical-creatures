function Centaur (name, breed) {
  this.name = name;
  this.breed = breed;
  this.cranky = false;
  this.layingDown = false;
  this.standing = true;
  this.tired = 0;
}

Centaur.prototype.shoot = function () {
  this.tired++
  this.cranky = (this.tired >= 3) ? true : false;
  switch (this.layingDown) {
    case true:
      return 'NO!';
      break;
  }
  switch (this.cranky) {
    case true:
      return 'NO!';
      break;
    case false:
      return 'Twang!!!';
      break;
  }
}

Centaur.prototype.run = function () {
  this.tired++
  this.cranky = (this.tired >= 3) ? true : false;
  switch (this.layingDown) {
    case true:
      return 'NO!';
      break;
  }
  switch (this.standing) {
    case true:
      return 'Clop clop clop clop!!!';
      break;
    case false:
      return 'NO';
      break;
  }
}

Centaur.prototype.drinkPotion = function () {
  switch (this.standing) {
    case true:
      isRested(this);
      break;
    case false:
      return "Not while I'm standing!";
      break;
}};

function isRested (centaur) {
  switch (centaur.tired) {
    case 0:
    case 1:
    case 2:
      centaur.cranky = true;
      break;
    case 3:
      centaur.tired = 0;
      centaur.cranky = false;
      break;
  }
}

Centaur.prototype.sleep = function () {
  switch (this.standing) {
    case true:
      return 'NO!';
      break;
    case false:
    this.tired = 0;
      this.cranky = false;
      return 'ZZZZ';
      break;
  }
}

Centaur.prototype.layDown = function () {
  this.standing = false;
  this.layingDown = true;
}

Centaur.prototype.standUp = function () {
  this.standing = true;
  this.layingDown = false;
}

module.exports = Centaur;
