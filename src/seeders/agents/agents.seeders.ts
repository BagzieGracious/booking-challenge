import agents from "./agents.json"
import { prisma } from "../../constants";
import { AgentRole } from "@prisma/client";
import AgentService from "../../packages/agents/agents.service";


export const AgentSeeder = async() => {
    try {
        
        for (const agent of agents) {
            const token = AgentService.generateToken();

            await prisma.agent.upsert({
                where: { name: agent.name },
                create: {
                    name: agent.name,
                    email: agent.email,
                    role: agent.role as AgentRole,
                    token: {
                        create: {
                            token: token
                        }
                    }
                },
                update: {
                    name: agent.name,
                    email: agent.email,
                    role: agent.role as AgentRole
                }
            });
            console.log(`Agent ${agent.name} was added`);
        }
    } catch (error) {
        console.log(error);
    }
}
