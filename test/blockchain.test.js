const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const Block = require('../src/block.js').Block;
const Blockchain = require('../src/blockchain.js').Blockchain;

describe('Blockchain Tests', () => {
  const blockchain1 = new Blockchain();

  it('the blockchain should only contain the genesis block', () => {
    assert.equal(blockchain1.length, 1);
  });

  it('the blockchain containing only the genesis block should be valid', () => {
    assert.equal(blockchain1.isValid(), true);
  });

  it('the latest block should be the genesis block', () => {
    const genesisBlockTemplate = new Block(0, -1, -1, -1);
    expect(blockchain1.getLatestBlock()).to.deep.equal(genesisBlockTemplate);
  });

  it('the blockchain should be valid after adding two new blocks', () => {
    const blockToBeAdded1 = new Block(1, new Date().getTime(), 'data1');
    const blockToBeAdded2 = new Block(2, new Date().getTime(), 'data2');
    blockchain1.addBlock(blockToBeAdded1);
    blockchain1.addBlock(blockToBeAdded2);
    assert.equal(blockchain1.isValid(), true);
  });

  it('should fail validity for currentBlock.hash !== currentBlock.calculatehash()', () => {
    blockchain1.chain[blockchain1.length-1].hash = 'fake hash';
    assert.notEqual(blockchain1.isValid(), true);

    blockchain1.chain[blockchain1.length-1].hash = blockchain1.chain[blockchain1.length-1].calculateHash();
  });

  it('should fail validity for previousBlock.hash !== previousBlock.calculateHash()', () => {
    blockchain1.chain[0].hash = 'fake hash';
    assert.notEqual(blockchain1.isValid(), true);

    blockchain1.chain[0].hash = blockchain1.chain[0].calculateHash();
  });

  it('should fail validity for currentBlock.previousHash !== previousBlock.hash', () => {
    blockchain1.chain[blockchain1.length-1].previousHash = 'fake hash';
    blockchain1.chain[blockchain1.length-1].hash = blockchain1.chain[blockchain1.length-1].calculateHash();
    assert.notEqual(blockchain1.isValid(), true);

    blockchain1.chain[blockchain1.length-1].previousHash = blockchain1.chain[blockchain1.length-2].hash;
    blockchain1.chain[blockchain1.length-1].hash = blockchain1.chain[blockchain1.length-1].calculateHash();
  });
});
