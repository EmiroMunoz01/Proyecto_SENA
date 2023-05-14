//importaremos express para crear la API REST

import express from "express";

class Server {
  private app: express.Application;
  private port: string;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3001";
    this.listen();
    console.log();
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Aplicacion corriendo en el puerto: ${this.port}`);
    });
  }
}
export default Server;