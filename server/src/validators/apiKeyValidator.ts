import  {check, validationResult} from 'express-validator'

const apiKey = process.env.SPOON_API_KEY;

export const ApiKeiValidator =[
    check(apiKey)
        .notEmpty()
        .trim()
        .withMessage('Missing API key'),
  
    (req, res, next) => {
        const errors = validationResult(req);
        req.api = apiKey;
        if (!errors.isEmpty){
            return res.status(500).json({errors: errors.array()});
        }
        next();
    }
];