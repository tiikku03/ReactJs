import React from "react";
import '../Css/Card.css';

function Card(props) {

return (
    props.dataArray.map((product, index) => {
      return (
        <div key={index} className="card" onClick={() => props.onClick(product.id)}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Category: {product.category.name}</p>
          <img src={product.images[0]} alt={product.title}/>
          <button>Comprar</button>
        </div>
      )
    })
)

}

export default Card;