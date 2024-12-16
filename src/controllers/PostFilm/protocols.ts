import { Film } from "../../models/film.js";

export interface IPostParams {
  name: string;
  data: string;
  director: string;
  assessment: number;
  streaming: string;
}

export interface IMongoPostRepository {
  postFilm(params: IPostParams): Promise<Film>;
}
