import express from "express";

import router from "./routes/CineRoutes.js";
import variables from "./config/dotenvConfig.js";
import { database } from "./database/mongoDB.js";
import { validateVariables } from "./config/validateVariables.js";

const main = async () => {
  try {
    validateVariables();

    const app = express();
    app.use(express.json());

    await database.connect();

    app.use(router);

    app.listen(variables.PORT, () => {
      console.log(`Rodando na porta ${variables.PORT}`);
    });
  } catch (error) {
    console.log(`Error during server startup: ${error}`);
    process.exit(1);
  }

  process.on("SIGINT", async () => {
    console.log("Encerrando conexão...");
    database.disconnect();
    process.exit(0);
  });
};

main();
