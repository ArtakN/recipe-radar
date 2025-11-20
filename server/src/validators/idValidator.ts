import { param, validationResult } from "express-validator";

export const IdValidator = [
    param('id')
    .notEmpty()
    .trim()
    .withMessage('Missing Recipe ID'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty){
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
];