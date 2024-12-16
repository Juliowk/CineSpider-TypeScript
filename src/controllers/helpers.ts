import { HttpResponse } from "./protocols.js";

const responseReturn = <T>(statusCode: number, body: T): HttpResponse<T> => {
  return {
    statusCode,
    body,
  };
};

export default responseReturn;
