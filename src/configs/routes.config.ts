import { Application } from "express";
import { AgentRoutes } from "../packages/agents/agents.routes";

class RoutesConfig {
    constructor(app: Application) {
        new AgentRoutes(app);
    }
}

export default RoutesConfig
