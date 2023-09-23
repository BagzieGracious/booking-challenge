import { Request, Response } from 'express';
import AgentService from './agents.service';
import { IAgentCreate } from './agents.interface';
import { agentValidationSchema } from './agents.validators';


class Agent {

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

            const agent = await AgentService.get(id);
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
            const agents = await AgentService.getAll();
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
            const data: IAgentCreate = {
                name: req.body.name,
                email: req.body.email,
                role: req.body.role,
            }

            const errors = agentValidationSchema.validate(data);
            if(errors.error) {
                res.status(400).json(errors.error.details)
                return
            }

            const agent = await AgentService.create(data)
            res.status(201).json({ data: agent })
        } catch (error) {
            console.log(error, "------");
            
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

            const data: IAgentCreate = {
                name: req.body.name,
                email: req.body.email,
                role: req.body.role,
            }

            const errors = agentValidationSchema.validate(data);
            if(errors.error) {
                res.status(400).json(errors.error.details)
                return
            }

            const agent = await AgentService.update(data, id);
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

            await AgentService.delete(id);
            res.status(200).json({});
        } catch (error) {
            res.status(400).json({ error });
        }
    }

}

export default new Agent();
