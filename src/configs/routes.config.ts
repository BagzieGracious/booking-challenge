import { Application } from "express";
import { AgentRoutes } from "../packages/agents/agents.routes";
import { BookingRoutes } from "../packages/bookings/booking.routes";

class RoutesConfig {
    constructor(app: Application) {
        new AgentRoutes(app);
        new BookingRoutes(app);
    }
}

export default RoutesConfig
