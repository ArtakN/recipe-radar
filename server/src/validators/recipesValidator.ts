import  {query, param, validationResult, body} from 'express-validator'
 
export const IngredientsValidator = [
    query('ingredients')
        .notEmpty()
        .trim()
        .withMessage('Missing ingredients'),
  
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty){
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
];

export const IdValidator = [
    param('id')
    .notEmpty()
    .trim()
    .withMessage('Missing Recipe id'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty){
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
];

export const RecipeValidator = [
    body('id').trim().isNumeric().notEmpty().withMessage('Missing or not numeric id'),
    body('tittle').trim().isString().notEmpty().withMessage('Missing or wrong Title'),
    body('image').trim().isString().notEmpty().withMessage('Missing or wrong img'),
    body('readyInMinutes').optional().trim().isNumeric().withMessage('wrong readyInMinutes'),
    body('imageType').optional().trim().isString().withMessage('wrong imageType'),
    body('usedIngredientCount').optional().trim().isNumeric().withMessage('wrong usedIngredientCount'),
    body('missedIngredientCount').optional().trim().isNumeric().withMessage('wrong missedIngredientCount'),
    body('likes').optional().trim().isNumeric().withMessage('wrong likes'),
    body('summary').optional().trim().isString().withMessage('wrong summary'),
    body('nutrition').optional().isObject().withMessage('wrong nutrition'),
    body('diets').optional().isArray().withMessage('wrong diets'),
    body('vegetarian').optional().isBoolean().withMessage('wrong vegetarian'),
    body('vegan').optional().isBoolean().withMessage('wrong vegan'),
    body('glutenFree').optional().isBoolean().withMessage('wrong glutenFree'),
    body('dairyFree').optional().isBoolean().withMessage('wrong dairyFree'),
    body('aggregateLikes').optional().isNumeric().withMessage('wrong aggregateLikes'),
    body('extendedIngredients').optional().isArray().withMessage('wrong extendedIngredients'),
    body('instuctions').optional().isString().withMessage('wrong instructions'),
    body('analyzedInstructions').optional().isArray().withMessage('wrong analyzedInstructions'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty){
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
];