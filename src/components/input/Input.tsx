import { useRef } from "react"

export default function Input() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <input
      className="px-5 py-3 w-sm font-poppins text-primary bg-secondary-soft border border-accent outline-none rounded-xl placeholder:text-primary mr-6.5"
      type="text"
      placeholder="Type something to search"
      ref={inputRef}
    />
  )
}
