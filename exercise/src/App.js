import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import CardContainer from './Components/CardContainer';
import BuyForm from './Components/BuyForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BuyForm></BuyForm>
      <CardContainer></CardContainer>
      </header>
    </div>
  );
}

export default App;
