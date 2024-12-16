import { Film } from "../../models/film.js";
import { database } from "../../database/mongoDB.js";
import {
  IMongoPostRepository,
  IPostParams,
} from "../../controllers/PostFilm/protocols.js";

export class MongoPostRepository implements IMongoPostRepository {
  async postFilm(params: IPostParams): Promise<Film> {
    try {
      const { insertedId } = await database.db
        .collection("Cine")
        .insertOne(params);
      const film = await database.db
        .collection<Film>("Cine")
        .findOne({ _id: insertedId });
      if (!film) throw new Error("Movie not created!");
      return film;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
