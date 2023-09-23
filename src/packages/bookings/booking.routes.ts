import { Application } from "express";
import Booking from './booking.controller'
import AuthMiddleware from "../../middlewares/auth.middleware";

export class BookingRoutes {
    app: Application;
    constructor(app: Application) {
        this.app = app;
        this.configureRoutes();
    }

    private configureRoutes() {
        this.app.route('/api/bookings').get([
            AuthMiddleware.authenticate(["ADMIN", "REGULAR"]),
            Booking.getAll
        ]);

        this.app.route('/api/bookings/:id').get([
            AuthMiddleware.authenticate(["ADMIN", "REGULAR"]),
            Booking.get
        ]);

        this.app.route('/api/bookings').post([
            AuthMiddleware.authenticate(["ADMIN"]),
            Booking.create
        ]);

        this.app.route('/api/bookings/:id').put([
            AuthMiddleware.authenticate(["ADMIN"]),
            Booking.update
        ]);

        this.app.route('/api/bookings/:id').delete([
            AuthMiddleware.authenticate(["ADMIN"]),
            Booking.delete
        ]);

        return this.app;
    }
}
