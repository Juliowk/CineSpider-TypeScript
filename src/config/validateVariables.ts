import { variables } from "./dotenvConfig.js";

export const validateVariables = () => {
  if (!variables.PORT) throw new Error("PORT environment variable not found!");
  if (!variables.MONGODB_URL)
    throw new Error("MONGODB_URL environment variable not found!");
};
