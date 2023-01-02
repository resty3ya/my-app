//import logo from './logo.svg';
//import './App.css';

const name = "Resty";

const continents = ['Africa','America','Asia','Australia','Africa'];

const helloContinents = Array.from(continents, c => `Hello ${c}!`);
const message = helloContinents.join('');
const luckyNumber = 7;
const fname = "Resty";
const lname = "Tria";
const fullname = fname +" " + lname;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    

      <h1>Hello {fullname} {message}</h1>
      <p>Your lucky number is: {Math.floor(Math.random()*10)}</p>

        <h1>My Favorite Foods</h1>
        <ul>
          <li>Bacon</li>
          <li>Jamon</li>
          <li>Noodles</li>
        </ul>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
