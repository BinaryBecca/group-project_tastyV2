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

  const ingredientList: string[] = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]

    ingredientList.push(measure, ingredient)
  }

  return (
    <dialog
      className="place-self-center px-16 py-12 h-full w-full flex flex-col justify-between gap-8 bg-primary text-white rounded-2xl border-2"
      ref={dialogRef}
      onClose={onClose}>
      <button className="absolute top-4 right-4" onClick={() => dialogRef.current?.close()}>
        X
      </button>
      <section>
        <img src={meal?.strMealThumb} alt={meal?.strMeal} />
        <div className="flex flex-row gap-10">
          <div>
            <h2>{meal?.strMeal}</h2>
            <ul>
              {meal?.strInstructions.split(".").map((description, index) => (
                <li key={index}>• {description}.</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Ingredients</h2>
            <ul>
              {ingredientList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </dialog>
  )
}
