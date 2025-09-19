import { useSearchParams } from "react-router"
import List from "../../components/list/List"
import { dummyMeals } from "../../data/data"
import Button from "../../components/button/Button"
import { useContext, useEffect, useState } from "react"
import { mealContext, type MealProviderProps } from "../../context/mealProvider"
import type { IMeal, IMeals } from "../../interfaces/IMeals"
import { getMeals } from "../../functions/Functions"

export default function Meals() {
  const [meals, setMeals] = useState<IMeals | null>(null)
  const [mealList, setMealList] = useState<IMeal[]>([])
  const params = useSearchParams()
  const category = params[0].get("category")
  const search = params[0].get("search")
  const { searchTerm } = useContext(mealContext) as MealProviderProps

  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [])

  useEffect(() => {
    const meals = async () => {
      setMeals(await getMeals(category ?? ""))
    }

    meals()
  }, [category])

  useEffect(() => {
    if (meals?.meals) {
      setMealList(meals.meals)
    }
  }, [meals])

  return (
    <>
      <Button backbutton />
      {category && <List title={`Everything ${category}`} type="meals" items={mealList} />}
      {search && <List title={`Everything ${searchTerm}`} type="meals" items={dummyMeals.meals} />}
    </>
  )
}
