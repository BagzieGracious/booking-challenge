import { Request, Response } from 'express';
import BookingService from './booking.service';
import { IBookingCreate } from './booking.interface';
import { bookingValidationSchema } from './booking.validators';


class Booking {

    /**
     *
     * @param req: Request
     * @param res: Response
     * @return Promise<void>
    */
    get = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const id: string = req.params.id;

            const booking = await BookingService.get(id);
            res.status(200).json({ data: booking })
        } catch (error) {
            res.status(200).json({ error })
        }
    }

    /**
     *
     * @param req: Request
     * @param res: Response
     * @return Promise<void>
    */
    getAll = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const bookings = await BookingService.getAll();
            res.status(200).json({ data: bookings })
        } catch (error) {
            res.status(200).json({ error })
        }
    }

    /**
     *
     * @param req: Request
     * @param res: Response
     * @return Promise<void>
     */
    create = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const data: IBookingCreate = {
                user_id: req.body.user_id,
                agent_id: req.agent.id,
                start_at: req.body.start_at,
                finish_at: req.body.finish_at,
            }

            const errors = bookingValidationSchema.validate(data);
            if(errors.error) {
                res.status(400).json(errors.error.details)
                return
            }

            const booking = await BookingService.create(data)
            res.status(201).json({ data: booking })
        } catch (error) {
            res.status(200).json({ error })
        }
    }

    /**
     *
     * @param req: Request
     * @param res: Response
     * @return Promise<void>
     */
    update = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const id: string = req.params.id;

            const data: IBookingCreate = {
                user_id: req.body.user_id,
                agent_id: req.agent.id,
                start_at: req.body.start_at,
                finish_at: req.body.finish_at,
            }

            const errors = bookingValidationSchema.validate(data);
            if(errors.error) {
                res.status(400).json(errors.error.details)
                return
            }

            const booking = await BookingService.update(data, id);
            res.status(200).json({ data: booking })
        } catch (error) {
            res.status(200).json({ error })
        }
    }

    /**
     *
     * @param req: Request
     * @param res: Response
     * @return Promise<void>
     */
    delete = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const id: string = req.params.id;

            await BookingService.delete(id);
            res.status(200).json({});
        } catch (error) {
            res.status(400).json({ error });
        }
    }
}

export default new Booking();
