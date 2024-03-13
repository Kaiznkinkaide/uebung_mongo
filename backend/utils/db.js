import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI)

await client. connect()
console.log("yay, connected!");

const db = client.db("expenses")
export default db