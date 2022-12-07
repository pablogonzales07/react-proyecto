import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailConteiner from "./componentes/ItemDetailConteiner/ItemDetailConteiner";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartConteiner from "./componentes/CartConteiner/CartConteiner";





function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <ItemListConteiner greeting={"Coder saludo"}/> }/>
        <Route path="/category/:id" element={ <ItemListConteiner greeting={"Coder saludo"}/> }/>
        <Route path="/detail/:productId" element={ <ItemDetailConteiner/> }/>
        <Route path="/cart" element={ <CartConteiner/> }/>
        <Route path="*" element= { <Navigate to="/"/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
