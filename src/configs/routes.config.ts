import { Application } from "express";
import { UserRoutes } from "../packages/users/users.routes";
import { AgentRoutes } from "../packages/agents/agents.routes";
import { BookingRoutes } from "../packages/bookings/booking.routes";

class RoutesConfig {
    constructor(app: Application) {
        new UserRoutes(app);
        new AgentRoutes(app);
        new BookingRoutes(app);
    }
}

export default RoutesConfig
