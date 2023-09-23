import { Request, Response } from 'express';
import BookingService from '../bookings/booking.service';


class Scheduler {
    /**
     *
     * @param req: Request
     * @param res: Response
     * @return Promise<void>
     */
    getClientSchedule = async (
        req: Request,
        res: Response
    ) => {
        try {
            const weekdate: string = req.query.weekdate as string;
            if(!weekdate) {
                res.status(400).json({ message: 'weekedate is required.' })
                return
            }
            const bookings = await BookingService.getAll(weekdate);
            res.status(200).json({ data: bookings })
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    /**
     *
     * @param req: Request
     * @param res: Response
     * @return Promise<void>
     */
    getBusinessSchedule = async(
        req: Request,
        res: Response
    ) => {
        res.status(200).json({})
    }
}

export default new Scheduler();
