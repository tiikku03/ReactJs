import React from "react";  

function ProductCard(props){
    return (
        <div class="container">
            <img 
                src={props.image} 
                alt={props.nombre} />
                <h3>{props.nombre}</h3>
                <p>{props.description}</p>
                <p><strong>precio: Q.{props.precio}</strong></p>
                <button>comprar</button>
        </div>
    )
}

export default ProductCard