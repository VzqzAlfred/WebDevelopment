const CardItem = ({ data, delFromCart }) => {
     let { id, name, price, quantity } = data;
     return (
          <div style={{borderBottom: "thin solid #ddd"}}>
               <h4>{name}</h4>
               <h5>${price}.<sup>00</sup> x{quantity} = ${price*quantity}.<sup>00</sup></h5>

               <button>Eliminar Uno</button>
               <button>Eliminar Todos</button>

          </div>
     )
}

export default CardItem
