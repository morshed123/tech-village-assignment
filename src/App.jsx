import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home.jsx"
import Layouts from "./components/layouts/Layouts.jsx"
import ProductsList from "./components/pages/ProductsList.jsx"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductsList />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
