import { Joi } from "express-validation";

export const bookingValidationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    role: Joi.string().valid("ADMIN", "REGULAR").required(),

    user_id: Joi.string().required(),
    agent_id: Joi.string().required(),
    start_at: Joi.date().required(),
    finish_at: Joi.date().required(),
})
