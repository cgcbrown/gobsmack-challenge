const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  // fetch raw data from the wallet api
  const fetchWalletData = () => axios.get(`http://buildingbrands.co/react-test/wallet.json`);
  // await for results
  const res = await fetchWalletData();
  console.log(res);

  // Create node object
  const walletNode = {
    // Required fields
    id: "user1",
    parent: `__SOURCE__`,
    internal: {
      type: `userWallet`,
    },
    children: [],

    // Fields we would like to query
    firstName: res.data.firstName,
    walletTarget: res.data.walletTarget,
    walletValue: res.data.walletValue,
  }
  

  // Get content digest of node.
  const contentDigest = crypto
    .createHash(`md5`)
    .update(JSON.stringify(walletNode))
    .digest(`hex`);
  // add it to userNode
  walletNode.internal.contentDigest = contentDigest;

  // Create node with the gatsby createNode() API
  createNode(walletNode);

  return;
}