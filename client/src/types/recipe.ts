export interface Nutrient {
  name: string;
  amount: number;
  unit: string;
}

export interface Nutrition {
  nutrients: Nutrient[];
}

export interface ExtendedIngredient {
  id: number;
  name: string;
  nameClean?: string;
  original: string;
  amount: number;
  unit: string;
  aisle: string;
  image: string;
}

export interface InstructionStep {
  number: number;
  step: string;
  ingredients: Array<{
    id: number;
    name: string;
    localizedName: string;
    image: string;
  }>;
  equipment: Array<{
    id: number;
    name: string;
    localizedName: string;
    image: string;
  }>;
}

export interface AnalyzedInstructions {
  name: string;
  steps: InstructionStep[];
}

export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes?: number;
  imageType?: string;
  usedIngredientCount?: number;
  missedIngredientCount?: number;
  likes?: number;
  summary?: string;
  nutrition?: Nutrition;
  diets?: string[];
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  dairyFree?: boolean;
  aggregateLikes?: number;
  extendedIngredients?: ExtendedIngredient[];
  instructions?: string;
  analyzedInstructions?: AnalyzedInstructions[];
}
