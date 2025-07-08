import logo from './logo.svg';
import './App.css';
import Ejemplo from './Components/Ejemplo';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Ejemplo></Ejemplo>
      </header>
    </div>
  );
}

export default App;
