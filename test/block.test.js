const assert = require('chai').assert;
const Block = require('../src/block.js').Block;

describe('Block Tests', () => {
  const block1 = new Block(0, -1, -1, -1);
  const knownHash = '81fdd0a0e79a268a8817552b9cb59db48844fab1c1dc9190006c9273674de38e89f923961e5a31e2b5fa298cc21ce7cdfc22bc86c108eb3fe29f370398f34ba4';

  it('the genesis block hash should equal the known hash for itself', () => {
    assert.equal(block1.calculateHash(), knownHash);
  });

  it('changing the index of the block should affect it\'s own hash', () => {
    block1.index = 1;
    assert.notEqual(block1.calculateHash(), knownHash);

    block1.index = 0;
  });

  it('changing the timestamp of the block should affect it\'s own hash', () => {
    block1.timestamp = 1;
    assert.notEqual(block1.calculateHash(), knownHash);

    block1.timestamp = -1;
  });

  it('changing the data of the block should affect it\'s own hash', () => {
    block1.data = 1;
    assert.notEqual(block1.calculateHash(), knownHash);

    block1.data = -1;
  });

  it('changing the previousHash of the block should affect it\'s own hash', () => {
    block1.previousHash = 1;
    assert.notEqual(block1.calculateHash(), knownHash);

    block1.previousHash = -1;
  });
});
