import logo from './logo.svg';
import './App.css';
import Balance from './features/balance/balance';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Balance />
    </div>
  );
}

export default App;
