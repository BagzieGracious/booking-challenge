import http from "http";
import { port } from './constants';
import bodyParser from "body-parser";
import express, { Express } from "express";
import RoutesConfig from "./configs/routes.config";

const app: Express = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

new RoutesConfig(app);
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`API started at http://localhost:${port}`);
});

export { app }
