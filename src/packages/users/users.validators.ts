import { Joi } from "express-validation";

export const userValidationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    agent_id: Joi.string().required()
})
