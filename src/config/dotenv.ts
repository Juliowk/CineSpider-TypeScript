import dotenv from "dotenv";
import { TypeVariables } from "./protocols.js";
dotenv.config();

const variables: TypeVariables = {
    PORT: process.env.PORT || "3333"
}

export default variables