import http from "http";
import { port } from './constants';
import bodyParser from "body-parser";
import express, { Express } from "express";

const app: Express = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`API started at http://localhost:${port}`);
});
