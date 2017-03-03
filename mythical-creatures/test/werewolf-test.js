var assert = require('chai').assert;
var {Werewolf, Victim} = require('../exercises/werewolf');

describe('Werewolf', function () {

  it('should be a function', function () {
    assert.isFunction(Werewolf);
  });

  it('should instantiate our good friend, Werewolf', function () {
    var werewolf = new Werewolf();
    assert.isObject(werewolf);
  });

  it('should have a name', function () {
    var werewolf = new Werewolf('Jorge');
    assert.equal(werewolf.name, 'Jorge');
  });

  it('should have a location', function () {
    var werewolf = new Werewolf('Horace','Basement lair');
    assert.equal(werewolf.location, 'Basement lair');
  });

  it('should default to human form', function () {
    var werewolf = new Werewolf('Mike','Basement lair');
    assert.equal(werewolf.human, true);
  });

  it('should refute human form after changing', function() {
    var werewolf = new Werewolf('Steve', 'Gusto');
    werewolf.change();
    assert.equal(werewolf.human, false);
  });

  it('should show assert wolf form after change', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');

    assert.equal(werewolf.wolf, false);
    werewolf.change();
    assert.equal(werewolf.wolf, true);
  });

  it('should show what form its in', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');

    assert.equal(werewolf.wolf, false);
    werewolf.change();
    werewolf.change();
    assert.equal(werewolf.wolf, false);
    assert.equal(werewolf.human, true);

    werewolf.change();
    assert.equal(werewolf.wolf, true);
    assert.equal(werewolf.human, false);
  });

  it('should start off not hungry', function() {
    // your code here
    var werewolf = new Werewolf('Phil', 'downstairs');
    assert.equal(werewolf.hungry, false);
  });

  it('should become hungry after changing into werewolf form', function() {
    // your code here
    var werewolf = new Werewolf('Phil', 'downstairs');
    werewolf.change()
    assert.equal(werewolf.hungry, true);
  });

  it('should be able to eat(victim) once hungry', function() {
    var werewolf = new Werewolf('Phil', 'downstairs');
    var victim = new Victim('Bob', 'upstairs');
    // your code here
    werewolf.change();
    assert.equal(werewolf.hungry, true);
    werewolf.eat(victim)
    assert.equal(werewolf.hungry, false);
  });

  it('should not be hungry after changing back to human form', function() {
    // your code here
    var werewolf = new Werewolf('Phil', 'downstairs');
    werewolf.change();
    assert.equal(werewolf.hungry, true);
    werewolf.change()
    assert.equal(werewolf.hungry, false);
  });

  it.skip('should change back to human form after eating', function() {
    // your code here
    var werewolf = new Werewolf('Phil', 'downstairs');
  });

  it.skip('should not be able to consume victim in human form', function() {
    // your code here
    var werewolf = new Werewolf('Phil', 'downstairs');
  });
});

describe('Victim', function () {

  it('should be a function', function () {
    assert.isFunction(Victim);
  });

  it('should instantiate our good friend, Victim', function () {
    var victim = new Victim();
    assert.isObject(victim);
  });

  it('should have a name', function () {
    var victim = new Victim('Jorge');
    assert.equal(victim.name, 'Jorge');
  });

  it('should start alive', function () {
    var victim = new Victim('TayTay');
    assert.equal(victim.alive, true);
  });

  it('should be dead after being eaten', function () {
    var werewolf = new Werewolf('TayTay');
    var victim = new Victim('TayTay');

    werewolf.change();
    werewolf.eat(victim);
    assert.equal(victim.alive, false);
  });
});
