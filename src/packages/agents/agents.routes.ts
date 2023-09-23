import { Application } from "express";
import Agent from './agents.controller'
import AuthMiddleware from "../../middlewares/auth.middleware";

export class AgentRoutes {
    app: Application;
    constructor(app: Application) {
        this.app = app;
        this.configureRoutes();
    }

    private configureRoutes() {
        this.app.route('/api/agents').get([
            AuthMiddleware.authenticate(["ADMIN"]),
            Agent.getAll
        ]);

        this.app.route('/api/agents/:id').get([
            AuthMiddleware.authenticate(["ADMIN"]),
            Agent.get
        ]);

        this.app.route('/api/agents').post([
            // AuthMiddleware.authenticate(["ADMIN"]),
            Agent.create
        ]);

        this.app.route('/api/agents/:id').put([
            AuthMiddleware.authenticate(["ADMIN"]),
            Agent.update
        ]);

        this.app.route('/api/agents/:id').delete([
            AuthMiddleware.authenticate(["ADMIN"]),
            Agent.delete
        ]);

        return this.app;
    }
}
