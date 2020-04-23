const assert = require('chai').assert;
const block = require('../src/block.js');

describe('Block Tests', () => {
  it('should equal itself', () => {
    assert.equal(block, block);
  });
});
