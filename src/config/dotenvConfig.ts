import dotenv from "dotenv";
import { TypeVariables } from "./protocols.js";
dotenv.config();

const variables: TypeVariables = {
  PORT: process.env.PORT || "3333",
  MONGODB_URL: process.env.MONGODB_URL || "mongodb://localhost:27017",
};

export default variables