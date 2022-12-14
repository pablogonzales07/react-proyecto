import { useState, useContext  } from "react"
import { CartContext} from "./CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore";



export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({ children }) => { 

    const [cartList, setCartList] = useState( [] )
    const [ formOrder, setFormOrder] = useState("form")
    const [loadingOrder, setLoadingOrder] = useState(true)
    const [ errorMsg, setErrorMsg ] = useState("")
    const [countProducts, setCountProducts] = useState(0);
    const [price, setPrice] = useState(0);
    const [dataForm, setDataForm] = useState( {
        name: "",
        surname: "",
        phone: "",
        email: "",
        emailConfirm: ""
      } )
    const [order, setOrder] = useState( {} )

    const addToCart = ( product, cantidad ) => {

        let newCart;
        let producto = cartList.find(item => item.id === product.id);

        if(producto){
            producto.cant += cantidad
            newCart=[ ...cartList ]
        }
        else {
            producto = { ...product, cant: cantidad }
            newCart=[ ...cartList, producto]
                 
        }

        setPrice(price + producto.precio * cantidad)
        setCountProducts(countProducts + cantidad)
        setCartList(newCart)
    }

    const emptyCart = () => {
        setCartList( [] )
        setCountProducts(0)
        setPrice(0)
    }

    const removeProductCart = (product) => {

        let filtrarProductos = cartList.filter(item => item.id !== product.id);
        
        setCartList(filtrarProductos)
        setCountProducts(countProducts - product.cant)
        setPrice(price - product.precio * product.cant)
         
    }

    const handleOnChange = (e) => {

        setDataForm( { 
          ...dataForm, [e.target.name ] : e.target.value
        } )
     
      }

      const addOrder = (e) => {
    
        e.preventDefault()
        const order = {}
        order.buyer = dataForm
        order.price = price
        order.items = cartList.map(item => ({ id: item.id, name: item.nombre, price: item.precio, cant: item.cant }) )
        
        const db = getFirestore();
        const queryCollection = collection(db, "orders");
    
       
         if(dataForm.phone.length > 12){

           setErrorMsg("A ingresado demasiados numeros")

         }
         else if(dataForm.email != dataForm.emailConfirm){

          setErrorMsg("Los emails no coinciden")

         }
         else {

          addDoc(queryCollection, order)
          .then(resp => setOrder(resp))
          .catch(err => console.log(err))
          .finally(() => {
             emptyCart()
             setLoadingOrder(false)
          }

          )
          setFormOrder("order")
    
         }

    }

    return(
        <CartContext.Provider value={ { 
            cartList,
            addToCart,
            emptyCart,
            countProducts,
            removeProductCart,
            price,
            handleOnChange,
            dataForm,
            order,
            setOrder,
            addOrder,
            formOrder,
            setFormOrder,
            errorMsg,
            loadingOrder
         } }>
            { children }

        </CartContext.Provider>
    )
}