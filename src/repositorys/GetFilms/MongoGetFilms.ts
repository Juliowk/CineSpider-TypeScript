import { IMongoGetRepository } from "../../controllers/GetFilms/protocols.js";
import { database } from "../../database/mongoDB.js";
import { Film } from "../../models/film.js";

export class MongoGetRepository implements IMongoGetRepository {
  async getFilms(): Promise<Film[]> {
    try {
      const films = await database.db
        .collection<Film>("Cine")
        .find({})
        .toArray();
      return films;
    } catch (error) {
      throw new Error(error);
    }
  }
}
