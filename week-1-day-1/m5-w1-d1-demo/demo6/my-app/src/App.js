import logo from './logo.svg';
import { Button } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          // className="App-link"
          className="btn btn-danger"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Button color='danger'>Danger!</Button> */}
      </header>
    </div>
  );
}

export default App;
