import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();

class Server {
  constructor() {
    this.app = express();
  }

  middleware() {
    this.app.use();
  }

  startServer(port) {
    this.app.listen(port, () => {
      console.log(`server started in ${port}`);
      console.log(`local: http://localhost:${port}`);
      console.log(`network: http://192.168.29.3:${port}`);
    });
  }
}

var server = new Server();
server.startServer(3000);
