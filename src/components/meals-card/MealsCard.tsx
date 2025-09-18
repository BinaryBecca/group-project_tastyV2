import { useState } from "react"
import type { IMeal, IMealDetail } from "../../interfaces/IMeals"
import Modal from "../modal/Modal"
import { getMealDetails } from "../../functions/Functions"

interface MealsCardProps {
  meal: IMeal
  backgroundColor?: string
}

export default function MealsCard({ meal, backgroundColor = "bg-primary" }: MealsCardProps) {
  const [showModal, setShowModal] = useState(false)
  const [mealDetail, setMealDetails] = useState<IMealDetail | null>(null)

  const openModalComponent = async () => {
    const details = await getMealDetails(meal.idMeal)
    setMealDetails(details)
    setShowModal(true)
  }

  return (
    <>
      <div
        className={`p-5 h-full flex flex-col justify-center items-center gap-3 rounded-xl shadow-lg cursor-pointer transition-all duration-200 hover:scale-105
    ${backgroundColor}`}
        onClick={openModalComponent}>
        <h3 className="font-poppins font-semibold text-white text-4xl">{meal.strMeal}</h3>
        <img src={meal.strMealThumb} alt={meal.idMeal} />
      </div>
      {showModal && (
        <Modal
          meal={mealDetail}
          onClose={() => {
            setShowModal(false)
          }}
        />
      )}
    </>
  )
}
