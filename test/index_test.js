// impoort assertion a library
const assert = require('chai').assert;
const { sayHello, addNumbers } = require('../index');

describe('index', function() {
  it('sayHello should return hello', function() {
    let result = sayHello();
    assert.equal(result , 'hello');
  });

  it('sayHello should return string', function() {
    let result = sayHello();
    assert.typeOf(result, 'string');
  });

  it('addNumbers should be above 5', function() {
    let result = addNumbers(1, 1);
    assert.isAbove(result, 5);
  })
});

