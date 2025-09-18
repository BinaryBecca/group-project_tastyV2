interface ButtonProps {
  label: string
}

export default function Button({ label }: ButtonProps) {
  return (
    <button className="px-10 py-3 font-poppins-bold font-bold text-white bg-primary rounded-xl cursor-pointer hover:scale-105 active:scale-95">
      {label}
    </button>
  )
}
