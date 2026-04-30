import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home/Home"
import Dish from "./pages/Dish/Dish"

function App() {
  return (
    <BrowserRouter basename="skranelia-vertshus">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dish/:id" element={<Dish />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
