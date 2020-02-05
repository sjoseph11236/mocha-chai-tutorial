// impoort assertion a library
const assert = require('chai').assert;
const { sayHello, addNumbers } = require('../index');

describe('index', function() {
  it('sayHello should return hello', function() {
    let result = sayHello();
    assert.equal(result , 'hello');
  });

  it('sayHello should return type string', function() {
    let result = sayHello();
    assert.typeOf(result, 'string');
  });

  it('addNumbers should be above 5', function() {
    let result = addNumbers(5, 5);
    assert.isAbove(result, 5);
  })


  it('andNumbers should return type number', function() {
    let result = addNumbers(5, 5);
    assert.typeOf(result, 'number');
  });
});

