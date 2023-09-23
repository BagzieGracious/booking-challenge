import {
    Request,
    Response,
    NextFunction
} from "express";
import AgentService from '../packages/agents/agents.service';


class AuthMiddleware {
    authenticate = (allowedRoles: string[]) => async(
        req: Request,
        res: Response, 
        next: NextFunction
    ) => {
        const token: string = req.headers['x-agent-id'] as string;
        
        if(!token) {
            return res.status(400).json({ message: "x-agent-id header is required." })
        }

        try {
            req.agent = await AgentService.getAgentByToken(token);

            if (req.agent && allowedRoles.includes(req.agent.role) ) {
                next();
            } else {
                res.status(403).json({ message: "Forbidden" })
            }
        } catch (error) {
            return res.status(401).json({ message: "Unauthorized" })
        }
    }
}

export default new AuthMiddleware()
