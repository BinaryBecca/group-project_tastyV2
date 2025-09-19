import { useSearchParams } from "react-router"
import List from "../../components/list/List"
import { dummyMeals } from "../../data/data"
import Button from "../../components/button/Button"
import { useContext, useEffect } from "react"
import { mealContext, type MealProviderProps } from "../../context/mealProvider"

export default function Meals() {
  const params = useSearchParams()
  const category = params[0].get("category")
  const search = params[0].get("search")
  const { searchTerm } = useContext(mealContext) as MealProviderProps

  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [])

  return (
    <>
      <Button backbutton />
      {category && <List title={`Everything ${category}`} type="meals" items={dummyMeals.meals} />}
      {search && <List title={`Everything ${searchTerm}`} type="meals" items={dummyMeals.meals} />}
    </>
  )
}
