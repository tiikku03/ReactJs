import React from "react";

function Coment(props){
    return (
        <div style={{borderBottom: '1px solid #eee', padding: '8px 0'}}>
            <p><strong>{props.author}</strong></p>
        </div>
    )
}

export default Coment