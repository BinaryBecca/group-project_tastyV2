import axios from "axios"
import type { ICategories } from "../interfaces/ICategories"
import type { IMealDetail, IMeals } from "../interfaces/IMeals"

const api = axios.create({ baseURL: "https://www.themealdb.com/api/json/v1/1" })

// #Search meal by name
export const searchMealByName = async (mealName: string): Promise<IMeals | null> => {
  try {
    const resp = await api.get(`/search.php?s=${mealName}`)
    if (resp.data.meals) {
      // console.log("resp.data", resp.data)
      // console.log("resp.data.meals", resp.data.meals)
      return { meals: resp.data.meals }
    }
  } catch (error) {
    console.error("Fehler bei der Suchanfrage", error)
    return null
  }
  return null
}

// #Fetching Categories
export const categories = async (): Promise<ICategories | null> => {
  try {
    const resp = await api.get(`/categories.php`)
    if (resp.data.categories) return resp.data
  } catch (error) {
    console.error("Fehler beim Abrufen der Kategorien", error)
    return null
  }
  return null
}

// #Fetching Meals
export const meals = async (category: string): Promise<IMeals | null> => {
  try {
    const resp = await api.get(`/filter.php?c=${category}`)
    if (resp.data.meals) return { meals: resp.data.meals }
  } catch (error) {
    console.error("Fehler beim Abrufen der Gerichte", error)
    return null
  }
  return null
}

// # Meal Details
export async function getMealDetails(id: string): Promise<IMealDetail | null> {
  try {
    const { data } = await api.get(`/lookup.php?i=${id}`)
    if (data.meals) {
      console.log(data)
      console.log(data.meals[0])
      return data.meals[0] ?? null
    }
  } catch (error) {
    console.error("Fehler beim Abrufen der Details", error)
    return null
  }
  return null
}
