import { useContext, useState } from "react"
import Button from "../button/Button"
import Input from "../input/Input"
import { mealContext, type MealProviderProps } from "../../context/mealProvider"
import { Navigate } from "react-router"

export default function Searchbar() {
  const [navigate, setNavigate] = useState(false)
  const { searchTerm } = useContext(mealContext) as MealProviderProps

  return (
    <>
      <div>
        <h1 className="font-poppins text-[54px] text-primary mb-9">Find a recipe, an idea, an inspiration...</h1>
        <Input />
        <Button
          label="Search"
          onClick={() => {
            setNavigate(true)
          }}
        />
      </div>
      {navigate && <Navigate to={`/meals?search=${searchTerm}`} />}
    </>
  )
}
