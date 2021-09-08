import { useReducer } from "react"
import { shoppingInitialState, shoppingReducer } from "../Reducers/shoppingReducer"
import ProductItem from "./ProductItem";

const ShoppingCard = () => {

     const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
     const {products, cart} = state;
      
     const addToCart = (id) => {
          console.log(id);
     }

     const delFromCart = () => {}
     const clearCart = () => {}



     return (
          <div>
               <h1>Carrito de compras</h1>
               <h2>Productos</h2>
               <article className="box grid-responsive">
                    {
                         products.map(product => (<ProductItem key={product.id} data={product} addToCart={addToCart} /> ) )
                    }
               </article>
               <h3>Carrito</h3>
               <article className="box"></article>
          </div>
     )
}

export default ShoppingCard
