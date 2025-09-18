import axios from "axios"
import type { ICategories } from "../interfaces/ICategories"

// #Categories Page
export const categories = async (): Promise<ICategories> => {
  try {
    const resp = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    console.log(resp)
    if (resp.data.categories) {
      return resp.data
    }
  } catch (error) {}
}
