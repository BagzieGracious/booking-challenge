import { Joi } from "express-validation";

export const agentValidationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    role: Joi.string().valid("ADMIN", "REGULAR").required(),
})
