import { Application } from "express";
import User from './users.controller';
import AuthMiddleware from "../../middlewares/auth.middleware";

export class UserRoutes {
    app: Application;
    constructor(app: Application) {
        this.app = app;
        this.configureRoutes();
    }

    private configureRoutes() {
        this.app.route('/api/users').get([
            AuthMiddleware.authenticate(["ADMIN", "REGULAR"]),
            User.getAll
        ]);

        this.app.route('/api/users/:id').get([
            AuthMiddleware.authenticate(["ADMIN", "REGULAR"]),
            User.get
        ]);

        this.app.route('/api/users').post([
            AuthMiddleware.authenticate(["ADMIN"]),
            User.create
        ]);

        this.app.route('/api/users/:id').put([
            AuthMiddleware.authenticate(["ADMIN"]),
            User.update
        ]);

        this.app.route('/api/users/:id').delete([
            AuthMiddleware.authenticate(["ADMIN"]),
            User.delete
        ]);

        return this.app;
    }
}
