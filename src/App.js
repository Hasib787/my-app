import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    name: "Hasib",
    age: 25
  }
  const person2 = {
    name: "Surovi",
    age: 22
  }
  let style={
    backgroundColor:'cyan',
    color: 'black'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <h2 style={style}>Husband: {person.name + " " + person.age}</h2>
        <h2 style={{backgroundColor:'pink', color:'black'}}>Wife: {person2.name + " " + person2.age}</h2>
        <p>My first React Paragraph</p>
      </header>
    </div>
  );
}

export default App;
