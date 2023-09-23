import { Application } from "express";
import { UserRoutes } from "../packages/users/users.routes";
import { AgentRoutes } from "../packages/agents/agents.routes";
import { BookingRoutes } from "../packages/bookings/booking.routes";
import { SchedulerRoutes } from "../packages/schedules/scheduler.routes";

class RoutesConfig {
    constructor(app: Application) {
        new UserRoutes(app);
        new AgentRoutes(app);
        new BookingRoutes(app);
        new SchedulerRoutes(app);
    }
}

export default RoutesConfig
