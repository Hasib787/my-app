import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>I'm a React person</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(){
  const personStyle={
    border:'2px solid yellow',
    margin: '.8em'
  }
  return (
    <div style = {personStyle}>
      <h1>Name: Hasibul Hasan</h1>
      <h2>Web Developer</h2>
    </div>
  )
}

export default App;
