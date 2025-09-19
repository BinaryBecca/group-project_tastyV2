import { useSearchParams } from "react-router"
import List from "../../components/list/List"
import Button from "../../components/button/Button"
import { useEffect, useState } from "react"
import type { IMeal, IMeals } from "../../interfaces/IMeals"
import { getMeals, searchMealByName } from "../../functions/Functions"

export default function Meals() {
  const [meals, setMeals] = useState<IMeals | null>(null)
  const [mealList, setMealList] = useState<IMeal[]>([])
  const params = useSearchParams()
  const category = params[0].get("category")
  const search = params[0].get("search")

  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [])

  useEffect(() => {
    const meals = async () => {
      if (category) {
        setMeals(await getMeals(category ?? ""))
      } else if (search && search.trim() !== "") {
        setMeals(await searchMealByName(search ?? ""))
      }
    }

    meals()
  }, [category, search])

  useEffect(() => {
    if (meals?.meals) {
      setMealList(meals.meals)
    }
  }, [meals])

  return (
    <>
      <Button backbutton />
      {category && <List title={`Everything ${category}`} type="meals" items={mealList} />}
      {search && <List title={`Everything ${search}`} type="meals" items={mealList} />}
    </>
  )
}
