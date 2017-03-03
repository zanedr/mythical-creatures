var assert = require('chai').assert;
var Hydra = require('../exercises/hydra');

describe('Hydra', function () {

  it("hydra wants to be recognized as a function", function() {
    assert.isFunction(Hydra);
  });

  it("we can't be friends if I don't exist. instantiate me", function () {
    var hydra = new Hydra();
    assert.isObject(hydra);
  })

  it("I need room for heads.", function () {
    var hydra = new Hydra();
    assert.deepEqual(hydra.heads, []);
  })

  it("MY FIRST HEAD NEEDS A NAME", function () {
    var hydra = new Hydra ();
    hydra.growHead({name: 'Phil'});
    assert.equal(hydra.heads[0], 'Phil');
  })

  it("one isn't enough. I need more", function () {
    var hydra = new Hydra ();
    hydra.growHead({name: 'Phil'});
    hydra.growHead({name: 'Bill'});
    hydra.growHead({name: 'Will'});
    assert.equal(hydra.heads.length, 3);
  })

})
