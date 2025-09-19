import { useEffect, useRef } from "react"
import type { IMealDetail } from "../../interfaces/IMeals"

interface ModalProps {
  meal: IMealDetail | null
  onClose?: React.ReactEventHandler<HTMLDialogElement> | undefined
}

export default function Modal({ meal, onClose }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }, [])

  if (!meal) return null

  return (
    <dialog
      className="place-self-center px-16 py-12 h-full w-full flex flex-col justify-between gap-8 bg-primary text-white rounded-2xl border-2"
      ref={dialogRef}
      onClose={onClose}>
      <button className="absolute top-4 right-4 text-2xl" onClick={() => dialogRef.current?.close()}>
        X
      </button>
      <section className="grid grid-rows">
        <img className="w-full max-h-[50vh] object-cover" src={meal?.strMealThumb} alt={meal?.strMeal} />
        <div className="grid grid-cols-[2fr_1fr] justify-center gap-20">
          <div>
            <h2 className="text-4xl py-10">{meal?.strMeal}</h2>
            <ul>
              {meal?.strInstructions.split("\n").map((description, index) => (
                <li className="text-xl leading-[1.8] mb-8" key={index}>
                  • {description}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-4xl py-10">Ingredients</h2>
            <ul>
              {meal.ingredients.map((listItem, index) => (
                <li className="text-2xl leading-[1.8]" key={index}>
                  {listItem.measure} {listItem.ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </dialog>
  )
}
