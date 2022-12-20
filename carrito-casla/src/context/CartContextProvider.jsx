import { useState } from "react"
import { CartContext } from "./CartContext"


export const CartContextProvider = ({ children }) => { 

    const [cartList, setCartList] = useState( [] )

    const agregarCarrito = ( product, cantidad ) => {

        let newCart;
        let producto = cartList.find(item => item.id === product.id);

        if(producto) {
            product.cant += cantidad
            newCart=[ ...cartList ]
        }
        else {
            producto = { ...product, cant: cantidad}
            newCart=[ ...cartList, producto]
        }

        setCartList(newCart)
    }

    const vaciarCarrito = () => {
        setCartList( [] )
    }

    return(
        <CartContext.Provider value={ { 
            cartList,
            agregarCarrito,
            vaciarCarrito
         } }>
            { children }

        </CartContext.Provider>
    )
}