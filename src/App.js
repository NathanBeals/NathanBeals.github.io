import './App.css';
import TopBar from './TopBar';

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <header className="App-header">
        <img src={require('./images/SteamedBun.png')} alt="Steamed Bun"></img>
        {/*<img src={require('./images/bun.jpg')} alt="secondimage"></img>*/}
        <a
          className="App-link"
          href="https://www.nathan-beals.com/"
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
