/* import './App.css' */
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import NavBar from './componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <>
       <NavBar/>
       <ItemListConteiner greeting={"Coder saludo"}/>   
    </>
  )
}

export default App
