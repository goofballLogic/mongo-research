const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "cool_db";

(async function() {

    const client = new MongoClient(url);
    try {
        await client.connect();
        const db = client.db(dbName);
        const stuff = db.collection("stuff");
        const query = { "hello": { $regex: /^wor/ } };
        const items = await stuff.find(query).toArray();
        console.log(items);

    } finally {

        client.close();

    }

}());
