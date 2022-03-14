import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="SteamedBun.png" alt="Steamed Bun"></img>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <a
          className="App-link"
          href="https://nathan-beals.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developer
        </a>
      </header>
    </div>
  );
}

export default App;
