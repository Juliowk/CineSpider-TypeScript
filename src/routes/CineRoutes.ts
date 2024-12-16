import { Router } from "express";

import { MongoPostRepository } from "../repositorys/PostFilm/MongoPostFilm.js";
import { MongoPostController } from "../controllers/PostFilm/MongoPostFilm.js";
import { MongoGetRepository } from "../repositorys/GetFilms/MongoGetFilms.js";
import { MongoGetController } from "../controllers/GetFilms/MongoGetFilms.js";

const router = Router();

router.get("/Films", async (request, response) => {
  const repository = new MongoGetRepository();
  const controller = new MongoGetController(repository);
  const { statusCode, body } = await controller.handle();
  response.status(statusCode).send(body);
});

router.post("/Film", async (request, response) => {
  const repository = new MongoPostRepository();
  const controller = new MongoPostController(repository);
  const { statusCode, body } = await controller.handle(request);
  response.status(statusCode).send(body);
});

export default router;
