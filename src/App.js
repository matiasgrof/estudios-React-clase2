// import logo from './logo.svg';
import './App.css';
import {header} from './Header.js';
import {body} from './Body.js';
import {footer} from './Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {header()}
        {body()}
        {footer()}
      </header>
    </div>
  );
}

export default App;
