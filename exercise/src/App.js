import './App.css'
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
