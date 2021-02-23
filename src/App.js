import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>I'm a React person</p>
        <Person name="Hasib" job="Toto Company manager"></Person>
        <Person name="Md. Masud Rana" job="Software Engineer"></Person>
      </header>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: '2px solid yellow',
    margin: '.8em',
    width: '600px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name} </h1>
      <h3>Profession: {props.job} </h3>
    </div>
  )
}

export default App;
