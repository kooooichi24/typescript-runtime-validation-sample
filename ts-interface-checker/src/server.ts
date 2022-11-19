import http, { IncomingMessage, ServerResponse } from "http";

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === "/" && req.method === "POST") {
      console.log("POST /");

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello World");
    }
  }
);

server.listen(3000);
