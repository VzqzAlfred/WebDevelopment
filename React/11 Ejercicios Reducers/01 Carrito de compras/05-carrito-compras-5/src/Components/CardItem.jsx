const CardItem = ({ data, delFromCart }) => {
     let { id, name, price, quantity } = data;
     return (
          <div style={{borderBottom: "thin solid #ddd"}}>
               <h4>{name}</h4>
               <h5>${price}.<sup>00</sup> x{quantity} = ${price*quantity}.<sup>00</sup></h5>

               <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
               <br />
               <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
               <br /><br />

          </div>
     )
}

export default CardItem
