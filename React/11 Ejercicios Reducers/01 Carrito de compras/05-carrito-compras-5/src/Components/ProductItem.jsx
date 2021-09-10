const ProductItem = ({ data, addToCart }) => {
     
     let {id, name, price} = data;
     return (
          <div style={{border: "thin solid #ddd", padding: "1rem"}}>
               <h4>{name}</h4>
               <h5>${price}.<sup>00</sup></h5>
               <button onClick={() => addToCart(id)}>Add</button>
          </div>
     )
}

export default ProductItem
