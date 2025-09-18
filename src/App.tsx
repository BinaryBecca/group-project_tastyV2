import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import Meals from "./pages/meals/Meals"
import { getMealDetails } from "./functions/Functions"
// import { categories, meals } from "./functions/Functions"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="meals" element={<Meals />} />
    </Route>
  )
)

function App() {
  // categories()
  // meals("Seafood")
  getMealDetails("52772")
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
