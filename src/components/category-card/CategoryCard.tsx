import { useState } from "react"
import type { ICategory } from "../../interfaces/ICategories"
import { Navigate } from "react-router"

interface CategoryCardProps {
  category: ICategory
  backgroundColor?: string
}

export default function CategoryCard({ category, backgroundColor = "bg-primary" }: CategoryCardProps) {
  const [navigate, setNavigate] = useState(false)

  return (
    <>
      <div
        className={`p-5 flex flex-col justify-center items-center gap-3 rounded-xl shadow-lg cursor-pointer transition-all duration-200 hover:scale-105
    ${backgroundColor}`}
        onClick={() => setNavigate(true)}>
        <h3 className="font-poppins font-semibold text-white text-5xl">{category.strCategory}</h3>
        <img src={category.strCategoryThumb} alt={category.strCategory} />
      </div>
      {navigate && <Navigate to={`/meals?category=${category.strCategory}`} />}
    </>
  )
}
