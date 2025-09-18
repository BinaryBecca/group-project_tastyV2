import type { IMeal, IMeals } from "../interfaces/IMeals"
import { createContext, useEffect, useState } from "react"
import { searchMealByName } from "../functions/Functions"

//Den Context erstellen, damit die Daten in der ganzen App verfügbar sind
export const mealContext = createContext<MealProviderProps | null>(null)

export interface MealProviderProps {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  meals: IMeal[]
  setMeals: React.Dispatch<React.SetStateAction<IMeal[]>>
}

export default function MealProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [meals, setMeals] = useState<IMeal[]>([])

  useEffect(() => {
    const fetchMeals = async () => {
      if (!searchTerm) {
        setMeals([])
        return
      }

      const result = await searchMealByName(searchTerm)
      if (result?.meals) {
        setMeals(result.meals)
      } else {
        setMeals([])
      }
    }

    fetchMeals()
  }, [searchTerm])

  //Alte Version
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       if (!searchTerm) {
  //         setMeals([])
  //         return
  //       }

  //       const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
  //       const resp = await axios.get<IMeals>(url)
  //       setMeals(resp.data.meals)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   getData()
  // }, [searchTerm])

  return (
    <mealContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        meals,
        setMeals,
      }}>
      {children}
    </mealContext.Provider>
  )
}
