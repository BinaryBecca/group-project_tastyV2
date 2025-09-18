import { useEffect, useRef } from "react"

interface ModalProps {
  onClose?: React.ReactEventHandler<HTMLDialogElement> | undefined
}

export default function Modal({ onClose }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }, [])

  return (
    <dialog
      className="place-self-center px-16 py-12 h-full w-full flex flex-col justify-between gap-8 bg-primary text-white rounded-2xl border-2"
      ref={dialogRef}
      onClose={onClose}>
      <button className="absolute top-4 right-4" onClick={() => dialogRef.current?.close()}>
        X
      </button>
    </dialog>
  )
}
