import * as http from "http";
import server from "./server";

const PORT = process.env.PORT || 9001;

const httpServer: http.Server = http.createServer(server);

async function startServer(): Promise<void> {

  httpServer.listen(PORT, () => {
    console.log("listening to server on ", PORT);
  });
}
startServer();
