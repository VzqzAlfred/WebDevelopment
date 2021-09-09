import { useReducer } from "react"
import { TYPES } from "../Actions/ShoppingActions";
import { shoppingInitialState, shoppingReducer } from "../Reducers/shoppingReducer"
import CardItem from "./CardItem";
import ProductItem from "./ProductItem";

const ShoppingCard = () => {

     const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
     const {products, cart} = state;
      
     const addToCart = (id) => {
          // console.log(id);

          dispatch({ type: TYPES.ADD_TO_CART, payload: id })
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
               <article className="box">
                    <button onClick={clearCart}>Limpiar carrito</button>
                    {
                         cart.map((item, index) => (<CardItem key={index} data={item} delFromCart={delFromCart} /> ))
                    }
               </article>
          </div>
     )
}

export default ShoppingCard
