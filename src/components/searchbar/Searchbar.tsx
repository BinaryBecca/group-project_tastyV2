import { useRef } from "react"

export default function Searchbar() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <h1 className="font-poppins text-[54px] text-primary">Find a recipe, an idea, an inspiration...</h1>
      <input className="" type="text" placeholder="Type something to search" ref={inputRef} />
    </div>
  )
}
