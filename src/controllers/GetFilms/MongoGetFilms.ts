import { HttpResponse, IController } from "../protocols.js";
import { IMongoGetRepository } from "./protocols.js";
import { Film } from "../../models/film.js";
import responseReturn from "../helpers.js";

export class MongoGetController implements IController {
  constructor(private readonly repository: IMongoGetRepository) {}
  async handle(): Promise<HttpResponse<Film[]>> {
    try {
      const films = await this.repository.getFilms();
      return responseReturn(200, films);
    } catch (error) {
      return responseReturn(500, error);
    }
  }
}
