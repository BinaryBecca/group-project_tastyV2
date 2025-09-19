/* eslint-disable react-refresh/only-export-components */
import type { IMeal } from "../interfaces/IMeals"
import { createContext, useEffect, useState } from "react"
import { searchMealByName } from "../functions/Functions"

//Den Context erstellen, damit die Daten in der ganzen App verfügbar sind
export const mealContext = createContext<MealProviderProps | null>(null)

export interface MealProviderProps {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  meals: IMeal[]
  setMeals: React.Dispatch<React.SetStateAction<IMeal[]>>
  clearingInput: boolean
  setClearingInput: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MealProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [meals, setMeals] = useState<IMeal[]>([])
  const [clearingInput, setClearingInput] = useState(false)

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

  return (
    <mealContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        meals,
        setMeals,
        clearingInput,
        setClearingInput,
      }}>
      {children}
    </mealContext.Provider>
  )
}
