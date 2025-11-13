import  {check, validationResult} from 'express-validator'

const apiKey = process.env.SPOON_API_KEY;

export const ApiKeiValidator = (req, res, next) => {
    
    if (!apiKey) {
        return res.status(401).json({ error: 'Missing or invalid API key in server configuration' });
    }

    next();
}