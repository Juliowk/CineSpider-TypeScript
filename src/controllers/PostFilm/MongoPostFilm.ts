import { z } from "zod";

import { Film } from "../../models/film.js";
import { HttpRequest, HttpResponse, IController } from "../protocols.js";
import { IMongoPostRepository, IPostParams } from "./protocols.js";
import responseReturn from "../helpers.js";

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

      return responseReturn<Film>(201, result);
    } catch (error) {
      return responseReturn<string>(500, error);
    }
  }
}
