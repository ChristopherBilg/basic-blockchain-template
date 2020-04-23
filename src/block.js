/**
 * The Individual block in the blockchain.
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
  }
}
