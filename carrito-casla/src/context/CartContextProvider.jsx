import { useState } from "react"
import { CartContext } from "./CartContext"


export const CartContextProvider = ({ children }) => { 

    const [cartList, setCartList] = useState( [] )
    const [countProducts, setCountProducts] = useState(0);
    const [price, setPrice] = useState(0);

    const agregarCarrito = ( product, cantidad ) => {

        let newCart;
        let producto = cartList.find(item => item.id === product.id);

        if(producto) {
            producto.cant += cantidad
            newCart=[ ...cartList ]

        }
        else {
            producto = { ...product, cant: cantidad }
            newCart=[ ...cartList, producto]
                 
        }

        setPrice(price + producto.precio * producto.cant)
        setCountProducts(countProducts + producto.cant)
        setCartList(newCart)
    }

    const vaciarCarrito = () => {
        setCartList( [] )
        setCountProducts(0)
    }

    const eliminarProductoCarrito = (product) => {

        let filtrarProductos = cartList.filter(item => item.id !== product.id);
        
        setCartList(filtrarProductos)
        setCountProducts(countProducts - product.cant)
        setPrice(price - product.precio * product.cant)
         
    }
   

    return(
        <CartContext.Provider value={ { 
            cartList,
            agregarCarrito,
            vaciarCarrito,
            countProducts,
            eliminarProductoCarrito,
            price
         } }>
            { children }

        </CartContext.Provider>
    )
}