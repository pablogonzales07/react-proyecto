import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailConteiner from "./componentes/ItemDetailConteiner/ItemDetailConteiner";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import CartConteiner from "./componentes/CartConteiner/CartConteiner";
import NetworksContainer from "./componentes/NetworksCointainer/NetworksContainer";
import Header from "./componentes/Header/Header";
import { CartContextProvider } from "./context/CartContextProvider";







function App() {
  
  return (
    <BrowserRouter>
      <CartContextProvider>
         <NetworksContainer/>
           <NavBar/>
           <Routes>
             <Route path="/" element={<> <Header/> <ItemListConteiner greeting={"Coder saludo"}/></> }/>
             <Route path="/category/:id" element={ <ItemListConteiner greeting={"Coder saludo"}/> }/>
             <Route path="/detail/:productId" element={ <ItemDetailConteiner/> }/>
             <Route path="/cart" element={ <CartConteiner/> }/>
             <Route path="*" element= { <Navigate to="/"/> } />
           </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
