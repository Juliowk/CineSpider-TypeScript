export interface HttpRequest<T> {
  body?: T;
  params?: unknown;
  headers?: unknown;
}

export interface HttpResponse<B> {
  statusCode: number;
  body: B;
}

export interface IController {
  handle(httpRequest: HttpRequest<unknown>): Promise<HttpResponse<unknown>>;
}
