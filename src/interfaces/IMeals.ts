export interface IMeals {
  meals: IMeal[]
}

export interface IMeal {
  // category -> meals
  strMeal: string
  strMealThumb: string
  idMeal: string
}

export interface IMealDetail {
  // search function und detail (id) function
  idMeal: string
  strMeal: string
  strCategory: string
  strInstructions: string
  strMealThumb: string
  strYoutube: string
  ingredients: IIngredientList[]

  // meals: { [key: string]: null | string }[]
}

export interface IIngredientList {
  ingredient: string
  measure: string
}
