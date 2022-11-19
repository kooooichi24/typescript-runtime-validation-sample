import http, { IncomingMessage, ServerResponse } from "http";
import { post } from "./controller";

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === "/" && req.method === "POST") {
      console.log("POST /");

      req.on("data", (chunk) => {
        const data = JSON.parse(chunk);
        post(data);
      });

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello World");
    }
  }
);

server.listen(3000);
