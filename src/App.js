import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./images/SteamedBun.png')} alt="Steamed Bun"></img>
        {/*<img src={require('./images/bun.jpg')} alt="secondimage"></img>*/}
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
