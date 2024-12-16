import { Film } from "../../models/film.js";

export interface IMongoGetRepository {
  getFilms(): Promise<Film[]>;
}
