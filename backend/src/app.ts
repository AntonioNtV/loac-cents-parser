import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import 'reflect-metadata';

import routes from './routes/index';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';


class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.initialization();
  }

  private async initialization(): Promise<void> {
    this.express.use(cors());
    this.express.use(errorHandlerMiddleware);
    this.routes();
  }

  private routes(): void {
    this.express.use(routes);
  }
}

const app = new App();
const application = app.express;

export { application };
