import { Application } from "express";
import Scheduler from './scheduler.controller'
import AuthMiddleware from "../../middlewares/auth.middleware";

export class SchedulerRoutes {
    app: Application;
    constructor(app: Application) {
        this.app = app;
        this.configureRoutes();
    }

    private configureRoutes() {
        this.app.route('/api/client/schedule').get([
            AuthMiddleware.authenticate(["ADMIN", "REGULAR"]),
            Scheduler.getClientSchedule
        ]);

        this.app.route('/api/business/schedule').get([
            AuthMiddleware.authenticate(["ADMIN", "REGULAR"]),
            Scheduler.getBusinessSchedule
        ]);

        return this.app;
    }
}
