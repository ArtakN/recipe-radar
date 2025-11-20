const apiKey = process.env.SPOON_API_KEY;

export const ApiKeiValidator = (req, res, next) => {
    
    if (!apiKey) {
        return res.status(400).json({ error: 'Missing or invalid API key in server configuration' });
    }

    next();
}