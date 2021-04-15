import http, { IncomingMessage, ServerResponse } from "http";

const host = "0.0.0.0";
const port = 4000;

const requestListener = function (req: IncomingMessage, res: ServerResponse) {
  res.writeHead(200);
  res.end("Welcome from Caddy");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
