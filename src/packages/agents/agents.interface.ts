import { AgentRole } from "@prisma/client";


export interface IAgentCreate {
    name: string;
    email: string;
    role: AgentRole;
}
