import { User } from "@prisma/client"
import { prisma } from "../../constants";
import { IUserCreate } from "./users.interface";


class UserService {

    /**
     *
     * @param id: string
     * @return Promise<User | null>
    */
    get = async (
        id: string
    ): Promise<User | null> => {
        return await prisma.user.findFirst({
            where: { id }
        })
    }

    /**
     * 
     * @param none
     * @return Promise<User[] | []>
    */
    getAll = async (): Promise<User[] | []> => {
        return await prisma.user.findMany({})
    }

    /**
     * 
     * @param data: IUserCreate
     * @return Promise<User>
    */
    create = async (
        data: IUserCreate
    ): Promise<User> => {
        return await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                agent: {
                    connect: {
                        id: data.agent_id
                    }
                }
            }
        })
    }

    /**
     * 
     * @param data: IUserCreate
     * @return Promise<void>
    */
    update = async (
        data: IUserCreate,
        id: string
    ): Promise<User> => {
        return await prisma.user.update({
            where: { id },
            data: {
                name: data.name,
                email: data.email,
                agent: {
                    connect: {
                        id: data.agent_id
                    }
                }
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
        await prisma.user.delete({
            where: { id }
        })
    }
}

export default new UserService();
