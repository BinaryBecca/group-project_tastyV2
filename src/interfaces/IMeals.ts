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
  meals: { [key: string]: null | string }[]
}
