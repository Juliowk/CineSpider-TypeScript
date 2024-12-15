import { MongoClient, Db } from "mongodb";

export const database = {
  client: null as MongoClient | null,
  db: null as Db | null,

  async connect(): Promise<void> {
    try {
      const url = process.env.MONGODB_URL;

      if (!url) throw new Error("Connection URL not found");

      const client = new MongoClient(url);
      const db = client.db("CineSpider");

      this.client = client;
      this.db = db;

      console.log("Conected to MongoDB!");
    } catch (error) {
      console.log("Error connecting to database!");
      throw error;
    }
  },

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.client = null;
      this.db = null;
      console.log("Database disconnected!");
    } else {
      console.warn("Attempting to close a non-existent connection!");
    }
  },
};
