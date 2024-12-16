import { Router } from "express";
import { MongoPostRepository } from "../repositorys/PostFilm/MongoPostFilm.js";
import { MongoPostController } from "../controllers/PostFilm/MongoPostFilm.js";
const router = Router();

router.get("/", (request, response) => {
  response.send("Hello World!!!");
});

router.post("/Film", async (request, response) => {
  const repository = new MongoPostRepository();
  const controller = new MongoPostController(repository);  
  const { statusCode, body } = await controller.handle(request);
  response.status(statusCode).send(body);
});

export default router;
