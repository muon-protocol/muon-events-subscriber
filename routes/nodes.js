require("dotenv").config();
const db = require("../utils/db");
const NodeCache = require("node-cache");

// cache for 1 minute
const cache = new NodeCache({ stdTTL: 60 });

const ABI = require("../config/MuonNodeManager_ABI.json");
const Web3 = require("web3");
const web3 = new Web3(process.env.WEB3_PROVIDER);
const nodeManagerContract = new web3.eth.Contract(
  ABI,
  process.env.NODE_MANAGER_CONTRACT
);

module.exports = (app) => {
  app.get(`/nodes/list`, function(req, res, next) {
    let nodes = cache.get("nodes-list");
    if (!nodes) {
      nodeManagerContract.methods
        .getAllNodes()
        .call()
        .then((x) => {
          nodes = x.map((item) => ({
            id: item[0],
            nodeAddress: item[1],
            stakerAddress: item[2],
            peerId: item[3],
            active: item[4],
            startTime: item[5],
            endTime: item[6],
            lastEditTime: item[7],
          }));
          cache.set("nodes-list", nodes);
          res.send(nodes);
        });
    }
  });
};