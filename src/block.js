const sha512 = require('crypto-js/sha512');

/**
 * The individual block in the blockchain.
 */
class Block {
  /**
   * @param {Number} index - The index of the block in the blockchain.
   * @param {Number} timestamp - The time that the block was created.
   * @param {Object} data - The JSON object of data to be added to the block.
   * @param {String} previousHash - A string of the previous block hashed.
   */
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  /**
   * @return {String} The hash of this block.
   */
  calculateHash() {
    return sha512(this.index +
                  this.timestamp +
                  this.previousHash +
                  JSON.stringify(this.data)).toString();
  }
}

exports.Block = Block;
