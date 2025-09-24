import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
    try {
      const { name, emailId } = req.body;

      await client.connect();
      const db = client.db("enpassantAI");
      const collection = db.collection("userDetails");

      const result = await collection.insertOne({
        name,
        emailId,
        subscribedAt: new Date(),
      });

      res.status(200).json({ insertedId: result.insertedId });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Something went wrong" });
    }
}