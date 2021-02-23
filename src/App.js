import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {name:'Photoshop', price:'$99.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$6.70'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        
        <p>I'm a React person</p>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name="Hasib" job="Toto Company manager"></Person>
        <Person name="Md. Masud Rana" job="Software Engineer"></Person>
      </header>
    </div>
  );
}

function Product(props){
  const productStyle= {
    border:'1px solid gray',
    borderRadius:'7px',
    color:'blue',
    backgroundColor:'lightgray',
    height:'300px',
    width:'300px',
    float:'left',
    margin:'10px'
  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy now</button>
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
