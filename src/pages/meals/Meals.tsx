import { useSearchParams } from "react-router"
import List from "../../components/list/List"
import { dummyMeals } from "../../data/data"
import Button from "../../components/button/Button"
import { useEffect } from "react"

export default function Meals() {
  const params = useSearchParams()
  const category = params[0].get("category")
  const search = params[0].get("search")

  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [])

  return (
    <>
      <Button backbutton />
      {category && <List title={`Everything ${category}`} type="meals" items={dummyMeals.meals} />}
      {search && <List title={`Everything ${category}`} type="meals" items={dummyMeals.meals} />}
    </>
  )
}
