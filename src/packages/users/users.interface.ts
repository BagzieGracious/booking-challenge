import { AgentRole } from "@prisma/client";

export interface IUserCreate {
    name: string;
    email: string;
    agent_id: string;
}
