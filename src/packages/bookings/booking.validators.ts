import { Joi } from "express-validation";
import moment from "moment";


const customDateValidator = (value: string, helpers: any) => {
    const date = moment(value, "DD/MM/YYYY HH:mm:ss");
    if (!date.isValid()) {
        return helpers.error("date.base", { custom: "must be a valid date" });
    }
    return date.toISOString();
};

export const bookingValidationSchema = Joi.object({
    user_id: Joi.string().required(),
    agent_id: Joi.string().required(),
    start_at: Joi.string()
            .custom(customDateValidator, 'custom date validation, dd/mm/yy H:mm:ss')
            .required()
            .messages({
                "date.base": "{{#label}} {{#custom}}",
            }),
    finish_at: Joi.string()
            .custom(customDateValidator, 'custom date validation, dd/mm/yy H:mm:ss')
            .required()
            .messages({
                "date.base": "{{#label}} {{#custom}}",
            }),
})
