import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailConteiner from "./componentes/ItemDetailConteiner/ItemDetailConteiner";
import CartConteiner from "./componentes/CartConteiner/CartConteiner";
import NetworksContainer from "./componentes/NetworksCointainer/NetworksContainer";
import Header from "./componentes/Header/Header";
import { CartContextProvider } from "./context/CartContextProvider";import Footer from "./componentes/Footer/Footer";
import FormRegist from "./componentes/FormRegist/FormRegist";
import FormLogin from "./componentes/FormLogin/FormLogin";
import FormCartContainer from "./componentes/FormCartContainer/FormCartContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"


function App() {
  
  return (
    <BrowserRouter>
      <CartContextProvider>
         <NetworksContainer/>
           <NavBar/>
           <Routes>
             <Route path="/" element={<> <Header/> <ItemListConteiner /></> }/>
             <Route path="/category/:id" element={ <ItemListConteiner /> }/>
             <Route path="/detail/:productId" element={ <ItemDetailConteiner/> }/>
             <Route path="/cart" element={ <CartConteiner/> }/>
             <Route path="/registUser" element={ <FormRegist /> } />
             <Route path="/loginUser" element={ <FormLogin /> } />
             <Route path="/confirmPurchase" element={ <FormCartContainer /> } />
             <Route path="*" element= { <Navigate to="/"/> } />
           </Routes>
           <Footer />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
