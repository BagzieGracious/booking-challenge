import { Joi } from "express-validation";

export const bookingValidationSchema = Joi.object({
    user_id: Joi.string().required(),
    agent_id: Joi.string().required(),
    start_at: Joi.date().required(),
    finish_at: Joi.date().required(),
})
