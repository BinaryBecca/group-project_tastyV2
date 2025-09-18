import { Outlet } from "react-router"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { useEffect, useRef, useState } from "react"
import Button from "../components/button/Button"

export default function Layout() {
  const mainRef = useRef<HTMLElement>(null)
  const [showToTopButton, setShowToTopButton] = useState(false)

  useEffect(() => {
    const mainElement = mainRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowToTopButton(entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px -100% 0px",
      }
    )

    if (mainElement) observer.observe(mainElement)

    return () => {
      if (mainElement) observer.unobserve(mainElement)
    }
  }, [])

  return (
    <>
      <Header />
      <main className="px-46.5" ref={mainRef}>
        <Outlet />
      </main>
      <Footer />
      {showToTopButton && <Button toTop />}
    </>
  )
}
