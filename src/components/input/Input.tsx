import { useContext, useEffect, useRef } from "react"
import { mealContext, type MealProviderProps } from "../../context/mealProvider"

export default function Input() {
  const inputRef = useRef<HTMLInputElement>(null)

  const { setSearchTerm, clearingInput, setClearingInput } = useContext(mealContext) as MealProviderProps

  useEffect(() => {
    if (inputRef.current) {
      setSearchTerm(inputRef.current?.value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputRef.current?.value])

  useEffect(() => {
    if (clearingInput && inputRef.current) {
      inputRef.current.value = ""
      setClearingInput(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearingInput])

  return (
    <input
      className="px-5 py-3 w-sm font-poppins text-primary bg-secondary-soft border border-accent outline-none rounded-xl placeholder:text-primary mr-6.5"
      type="text"
      placeholder="Type something to search"
      ref={inputRef}
    />
  )
}
