import { Request, Response } from 'express';
import UserService from './users.service';
import { IUserCreate } from './users.interface';
import { userValidationSchema } from './users.validators';


class User {

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

            const agent = await UserService.get(id);
            res.status(200).json({ data: agent })
        } catch (error) {
            res.status(400).json({ error })
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
            const agents = await UserService.getAll();
            res.status(200).json({ data: agents })
        } catch (error) {
            res.status(400).json({ error })
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
            const data: IUserCreate = {
                name: req.body.name,
                email: req.body.email,
                agent_id: req.agent.id
            }

            const errors = userValidationSchema.validate(data);
            if(errors.error) {
                res.status(400).json(errors.error.details)
                return
            }

            const agent = await UserService.create(data)
            res.status(201).json({ data: agent })
        } catch (error) {
            res.status(400).json({ error })
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

            const data: IUserCreate = {
                name: req.body.name,
                email: req.body.email,
                agent_id: req.agent.id
            }

            const errors = userValidationSchema.validate(data);
            if(errors.error) {
                res.status(400).json(errors.error.details)
                return
            }

            const agent = await UserService.update(data, id);
            res.status(200).json({ data: agent })
        } catch (error) {
            res.status(400).json({ error })
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

            await UserService.delete(id);
            res.status(200).json({});
        } catch (error) {
            res.status(400).json({ error });
        }
    }
}

export default new User();
