import { useEffect, useState } from "react"
import List from "../../components/list/List"
import { getCategories } from "../../functions/Functions"
import type { ICategories, ICategory } from "../../interfaces/ICategories"

export default function Home() {
  const [categories, setCategories] = useState<ICategories | null>(null)
  const [categoryList, setCategoryList] = useState<ICategory[]>([])

  useEffect(() => {
    const categories = async () => {
      setCategories(await getCategories())
    }

    categories()
  }, [])

  useEffect(() => {
    if (categories?.categories) {
      setCategoryList(categories.categories)
    }
  }, [categories])

  return (
    <>
      <List title="Or go through our categories" type="categories" items={categoryList} />
    </>
  )
}
