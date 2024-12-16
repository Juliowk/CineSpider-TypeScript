import express from "express";

import router from "./routes/CineRoutes.js";
import { database } from "./database/mongoDB.js";
import { variables } from "./config/dotenvConfig.js";
import { validateVariables } from "./config/validateVariables.js";

const main = async () => {
  try {
    validateVariables();

    const app = express();
    app.use(express.json());

    await database.connect();

    app.use(router);

    app.listen(variables.PORT, () => {
      console.log(`Running on port ${variables.PORT}`);
    });
  } catch (error) {
    console.log(`Error during server startup: ${error}`);
    process.exit(1);
  }

  process.on("SIGINT", async () => {
    console.log("Closing connection...");
    database.disconnect();
    process.exit(0);
  });
};

main();
