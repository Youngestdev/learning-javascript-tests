const assert = require('assert');

// assert.equal()
// The assert.equal(), checks for equality between the passed parameters.

describe('-', () => {
  it('returns the difference of two values', () => {
    const bigNum = 100;
	const smallNum = 4;
	const expected = 96;
    
    const result =  bigNum - smallNum;

    // Write assertion here
    assert.equal(result, expected);
  });
});

// assert.strictEqual()
// The assert.strictEqual() checks the equality of the parameters strictly i.e it uses === unlike equal which uses ==

describe('-', () => {
    it('returns the difference of two values', () => {
      const bigNum = 100;
          const smallNum = 4;
          const expected = 96;
      
      const result =  bigNum - smallNum;
  
      // Write assertion here
      assert.strictEqual(result, expected);
    });
  });


// assert.deepEqual()
// The assert.deepEqual() works perfectly with objects because objects have keys and values whose equality cannot
// be easily determined using the .equal(), .ok() etc.

describe('+', () => {
    it('returns the sum of two values', () => {
      // Setup
          let expected = [3, 4, 7];
          let sum = [3, 4];
  
      // Exercise
          sum.push(3 + 4);
  
      // Verify
      assert.deepEqual(sum, expected);
    });
  });
  
// Another example of assert.deepEqual()

describe('+', () => {
    it('returns the sum of two values', () => {
      // Setup
          let expected = {a: 3, b: 4, result: 7};
          let sum = {a: 3, b: 4};
  
      // Exercise
          sum.result = sum.a + sum.b;
  
      // Verify
      assert.deepEqual(sum, expected);
    });
  });
  

// assert.notEqual()
// The assert.notEqual(), is used to check the non-equality of variables.It is more or less saying 1 != 2

describe('Numbers', () => {
  it('1 does not equal 2', () => {
    // Verify
    assert.notEqual(1, 2);
  });
});
