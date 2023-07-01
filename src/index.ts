import bc from "./blockchain";

const blockchain = new bc.BlockChain()
blockchain.addBlock('first')
blockchain.addBlock('first')
blockchain.addBlock('first')
console.log(blockchain.getBlocks)
blockchain.getBlocks.push(new bc.Block("xx", 1234, "hacked"))
console.log(blockchain.getBlocks)

