import {useState, useEffect} from "react";
import React  from "react";
import Card from './Card';

// Your fetchData function remains the same, it's good!
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)// it returns a promise
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}


function CardContainer() {
  const [products, setProducts] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 
  debugger

  useEffect(() => {
    fetchData('https://api.escuelajs.co/api/v1/products')
      .then(data => {
        setProducts(data); 
        setIsLoading(false); 
      })
      .catch(err => {
        setError(err); 
        setIsLoading(false); 
      });
  }, []); 
  
  if (isLoading) {
    return <div className="App">Loading products...</div>;
  }

  if (error) {
    return <div className="App">Error: {error.message}</div>;
  }

  const handleCardClick = (productId) => {
    console.log(`Product ID clicked: ${productId}`); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Our Products</h1>
        <div className="card-container"> 
          <Card dataArray={products} onClick={handleCardClick}></Card>
        </div>
      </header>
    </div>
  );
}

export default CardContainer;