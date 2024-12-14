import express from "express";
import variables from "./config/dotenv.js";
import router from "./routes/CineRoutes.js";

const main = () => {
  const app = express();
  app.use(express.json());

  app.use(router);

  app.listen(variables.PORT, () => {
    console.log(`Rodando na porta ${variables.PORT}`);
  });
};

main();
