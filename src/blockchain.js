const Block = require('./block.js').Block;

/**
 * The chain of individual blocks.
 */
class Blockchain {
  /**
   * Only the chain is needed to be constructed.
   */
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  /**
   * @return {Block} The initial, genesis block.
   */
  createGenesisBlock() {
    return new Block(0, -1, -1, -1);
  }

  /**
   * @return {Block} The last block added to the blockchain.
   */
  getLatestBlock() {
    return this.chain[this.chain.length-1];
  }

  /**
   * @param {Block} newBlock - The newest block to be added to the blockchain.
   */
  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  /**
   * @return {Boolean} Returns the validity of all hashes in the blockchain.
   */
  isValid() {
    for (let index = this.chain.length-1; index > 0; index--) {
      const currentBlock = this.chain[index];
      const previousBlock = this.chain[index-1];

      if (currentBlock.hash !== currentBlock.calculateHash()) return false;
      if (previousBlock.hash !== previousBlock.calculateHash()) return false;
      if (currentBlock.previousHash !== previousBlock.hash) return false;
    }

    return true;
  }

  /**
   * @return {Number} The length of the blockchain.
   */
  get length() {
    return this.chain.length;
  }
}

exports.Blockchain = Blockchain;
