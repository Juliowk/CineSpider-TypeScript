import { z } from "zod";

import { Film } from "../../models/film.js";
import { HttpRequest, HttpResponse, IController } from "../protocols.js";
import { IMongoPostRepository, IPostParams } from "./protocols.js";

const schemaHttpRequest = z.object({
  name: z.string(),
  data: z.string(),
  director: z.string(),
  assessment: z.number(),
  streaming: z.string(),
});

const validatedHttpRequest = (body: unknown) => {
  try {
    const validatedData = schemaHttpRequest.parse(body);
    return { success: true, data: validatedData };
  } catch (error) {
    return { success: false, error: error };
  }
};

export class MongoPostController implements IController {
  constructor(private readonly repository: IMongoPostRepository) {}

  async handle(
    httpRequest: HttpRequest<IPostParams>
  ): Promise<HttpResponse<Film | string>> {
    try {
      const validation = validatedHttpRequest(httpRequest.body);

      if (!validation.success) {
        return {
          statusCode: 400,
          body: "Invalid data",
        };
      }

      const result = await this.repository.postFilm(httpRequest.body);

      return {
        statusCode: 201,
        body: result,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: error,
      };
    }
  }
}
