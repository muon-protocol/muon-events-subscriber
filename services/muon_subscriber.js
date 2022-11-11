require("dotenv").config();
const Redis = require("ioredis");
const redis = new Redis(process.env.PUB_SUB_REDIS);
const db = require("../utils/db");

const handle_message = async (msg) => {
    //TODO: verify the request and TSS signatures
    let data = JSON.parse(msg);
    data["_id"] = data.requestData.reqId;
    let collection = await db.get("requests");
    await collection.insertOne(data);
};

const main = async () => {
    redis.subscribe(process.env.PUB_SUB_CHANNEL);
    redis.on("message", async (channel, message) => {
        await handle_message(message);
    });
};

main();
