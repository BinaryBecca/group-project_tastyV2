import { useSearchParams } from "react-router"
import List from "../../components/list/List"
import { dummyMeals } from "../../data/data"

export default function Meals() {
  const params = useSearchParams()
  const category = params[0].get("category")

  return (
    <>
      <List title={`Everything ${category}`} type="meals" items={dummyMeals.meals} />
    </>
  )
}
