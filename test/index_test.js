// impoort assertion a library
const assert = require('chai').assert;
const { sayHello, addNumbers } = require('../index');

const sayHelloResult = sayHello();
const addNumbersResult = addNumbers(5,5);

describe('index', function() {

  describe('sayHelo()', function() {
    it('sayHello should return hello', function() {
      // let result = sayHello();
      assert.equal(sayHelloResult , 'hello');
    });
  
    it('sayHello should return type string', function() {
      // let result = sayHello();
      assert.typeOf(sayHelloResult, 'string');
    });
  });

  describe('addNumbers()', function() {
    it('addNumbers should be above 5', function() {
      // let result = addNumbers(5, 5);
      assert.isAbove(addNumbersResult, 5);
    })
  
  
    it('andNumbers should return type number', function() {
      // let result = addNumbers(5, 5);addNumbersResult
      assert.typeOf(addNumbersResult, 'number');
    });
  });
});

