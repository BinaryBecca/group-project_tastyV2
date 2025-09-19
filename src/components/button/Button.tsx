import { useNavigate } from "react-router"

interface ButtonProps {
  label?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  backbutton?: boolean
  toTop?: boolean
}

export default function Button({ label, onClick, backbutton = false, toTop = false }: ButtonProps) {
  const navigate = useNavigate()

  return (
    <button
      className={`${
        label && "px-10 py-3 rounded-xl"
      } font-poppins-bold font-bold text-white bg-primary cursor-pointer hover:scale-105 active:scale-95 ${
        backbutton && "w-12 h-12 fixed top-5 left-5 rounded-full"
      } ${toTop && "w-12 h-12 fixed bottom-5 right-5 rounded-full"}`}
      onClick={
        backbutton
          ? () => {
              console.log("zurück geklickt")
              console.log("history", window.history)
              navigate(-1)
            }
          : toTop
          ? () => window.scrollTo({ top: 0, behavior: "smooth" })
          : onClick
      }>
      {backbutton ? "←" : toTop ? "↑" : label}
    </button>
  )
}
