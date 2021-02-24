import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const studentNames = ['Hridoy', 'Riad', 'Rishad', 'Rakib', 'Hasib', 'Zara'];
  const products = [
    { name: 'Photoshop', price: '$99.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.70' },
    { name: 'Windows Pro', price: '$199.99' }
  ]


  return (
    <div className="App">
      <header className="App-header">

        <p>I'm a React person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            studentNames.map(student => <li>{student}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <Person name="Hasib" job="Toto Company manager"></Person>
        <Person name="Md. Masud Rana" job="Software Engineer"></Person>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '7px',
    color: 'blue',
    backgroundColor: 'lightgray',
    height: '300px',
    width: '300px',
    float: 'left',
    margin: '10px',
  }
  const { name, price } = props.product;

  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button style={buttonStyle}>Buy now</button>
    </div>
  )
}
const buttonStyle = {
  backgroundColor: 'green',
  color: 'white',
  borderRadius: '5px',
  margin: '5px'
}
//counter
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button style={buttonStyle} onClick={handleDecrease}>Decrease</button>
      <button style={buttonStyle} onClick={handleIncrease}>Increase</button>
    </div>
  )
}

//Using Api
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      {
        users.map(user =><li>{user.name}</li>)
      }
    </div>
  )
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
