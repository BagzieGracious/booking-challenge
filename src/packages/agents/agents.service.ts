import { Agent } from "@prisma/client"
import { prisma } from "../../constants";
import { IAgentCreate } from "./agents.interface";


class AgentService {

    /**
     *
     * @param id: string
     * @return Promise<Agent | null>
    */
    get = async (
        id: string
    ): Promise<Agent | null> => {
        return await prisma.agent.findFirst({
            where: { id }
        })
    }

    /**
     *
     * @param token: string
     * @return Promise<Agent | null>
    */
    getAgentByToken = async(
        token: string
    ) => {
        return await prisma.agent.findFirst({
            where: {
                token: {
                    token
                }
            }
        });
    }

    /**
     * 
     * @param none
     * @return Promise<Agent[] | []>
    */
    getAll = async (): Promise<Agent[] | []> => {
        return await prisma.agent.findMany({})
    }

    /**
     * 
     * @param data: string
     * @return Promise<Agent>
    */
    create = async (
        data: IAgentCreate
    ): Promise<Agent> => {
        const token = this.generateToken();
        return await prisma.agent.create({
            data: {
                name: data.name,
                email: data.email,
                role: data.role,
                token: {
                    create: {
                        token: token
                    }
                }
            },
            include: {
                token: true
            }
        })
    }

    /**
     * 
     * @param data: string
     * @return Promise<void>
    */
    update = async (
        data: IAgentCreate,
        id: string
    ): Promise<Agent> => {
        return await prisma.agent.update({
            where: { id },
            data: {
                name: data.name,
                email: data.email,
                role: data.role
            }
        });
    }

    /**
     * @param id: string
     * @return Promise<void>
    */
    delete = async (
        id: string
    ): Promise<void> => {
        await prisma.agent.delete({
            where: { id }
        })
    }

    /**
     * @param none
     * @return string
    */
    generateToken = () => {
        const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const timestamp = new Date().getTime().toString();
        const token = timestamp + "-" + randomString;
        return token;
    }
}

export default new AgentService();
