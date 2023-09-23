import { Booking, Prisma } from "@prisma/client"
import { prisma } from "../../constants";
import { IBookingCreate } from "./booking.interface";
import moment from "moment";

class BookingService {

    /**
     *
     * @param id: string
     * @return Promise<Booking | null>
    */
    get = async (
        id: string
    ): Promise<Booking | null> => {
        return await prisma.booking.findFirst({
            where: { id },
            include: {
                user: true,
                agent: true
            }
        })
    }

    /**
     * @param weekdate: string | boolean
     * @return Promise<Booking[] | []>
    */
    getAll = async (
        weekdate: string | boolean = false
    ): Promise<Booking[] | []> => {

        let where: Prisma.BookingWhereInput = {}
        if(weekdate) {
            where = {
                start_at: {
                    gte: ''
                },
                finish_at: {
                    lte: ''
                }
            }
        }
        return await prisma.booking.findMany({
            where,
            include: {
                user: true,
                agent: true
            }
        })
    }

    /**
     * @param data: string
     * @return Promise<Booking>
    */
    create = async (
        data: IBookingCreate
    ): Promise<Booking> => {
        return await prisma.booking.create({
            data: {
                user: {
                    connect: {
                        id: data.user_id
                    }
                },
                agent: {
                    connect: {
                        id: data.agent_id
                    }
                },
                start_at: moment(data.start_at, "DD/MM/YYYY HH:mm:ss").toISOString(),
                finish_at: moment(data.finish_at, "DD/MM/YYYY HH:mm:ss").toISOString(),
            }
        })
    }

    /**
     * 
     * @param data: string
     * @return Promise<void>
    */
    update = async (
        data: IBookingCreate,
        id: string
    ): Promise<Booking> => {
        return await prisma.booking.update({
            where: { id },
            data: {
                user: {
                    connect: {
                        id: data.user_id
                    }
                },
                agent: {
                    connect: {
                        id: data.agent_id
                    }
                },
                start_at: moment(data.start_at, "DD/MM/YYYY HH:mm:ss").toISOString(),
                finish_at: moment(data.finish_at, "DD/MM/YYYY HH:mm:ss").toISOString(),
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
        await prisma.booking.delete({
            where: { id }
        })
    }
}

export default new BookingService();
