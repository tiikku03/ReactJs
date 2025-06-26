import logo from "./logo.svg";
import "./App.css";
import Saludo from "./Saludo.js";
import ProductCard from "./ProductCarsd.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludo></Saludo>
        <ProductCard
          image="https://www.jbl.com.gt/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw975cdfa5/01.JBL_Live%20Buds%203_Product%20Image_Case%20Feature%202_Blue.png?sw=537&sfrm=png"
          nombre="Audifono JBL"
          description="Audifonos con una muy buena calidad de sonido"
          precio="300"
        ></ProductCard>
        <ProductCard
          image="https://m.media-amazon.com/images/I/81-YRA6tQqL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          nombre="Bocina"
          description="Bocina para uso en exteriores"
          precio="500"
        ></ProductCard>
      </header>
    </div>
  );
}

export default App;
