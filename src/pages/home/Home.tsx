import List from "../../components/list/List"
import { dummyCategories } from "../../data/data"

export default function Home() {
  return (
    <>
      <List title="Or go through our categories" type="categories" items={dummyCategories.categories} />
    </>
  )
}
