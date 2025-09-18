import Button from "../button/Button"
import Input from "../input/Input"

export default function Searchbar() {
  return (
    <div>
      <h1 className="font-poppins text-[54px] text-primary mb-9">Find a recipe, an idea, an inspiration...</h1>
      <Input />
      <Button label="Search" />
    </div>
  )
}
