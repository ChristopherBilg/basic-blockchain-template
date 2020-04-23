const assert = require('chai').assert;
const Block = require('../src/block.js').Block;

describe('Block Tests', () => {
  const block1 = new Block(0, -1, -1, -1);
  const knownHash = '85588a7a4680f758c3a0ef6855e04518a083f1f5ea12cc7d1cd389c692d93a04251bf31dd0f971d4ce42aca5718a0da1a273ba9540aefecbab9817941527c42c';

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
