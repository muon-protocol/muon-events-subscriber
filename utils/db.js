const MongoClient = require("mongodb").MongoClient;
var db;

const connect = async () => {
    var client = await MongoClient.connect("mongodb://localhost:27017/");
    db = client.db("muon_explorer");
};

module.exports.get = async (collection) => {
    if(!db) {
        await connect();
    }
    return db.collection(collection);
};
