import axios from "axios"
import type { ICategories } from "../interfaces/ICategories"

// #Categories Page
export const categories = async (): Promise<ICategories | null> => {
  try {
    const resp = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    // console.log(resp)
    // console.log(resp.data.categories)
    if (resp.data.categories) return resp.data
  } catch (error) {
    console.error("Fehler beim Abrufen der Kategorien", error)
    return null
  }
  return null
}
