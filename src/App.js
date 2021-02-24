import logo from './logo.svg';
import './App.css';

function App() {
  const studentNames=['Hridoy', 'Riad', 'Rishad', 'Rakib', 'Hasib','Zara'];
  const products=[
    {name:'Photoshop', price:'$99.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$6.70'},
    {name:'Windows Pro', price:'$199.99'}
  ]


  return (
    <div className="App">
      <header className="App-header">
        
        <p>I'm a React person</p>
        <ul>
          {
            studentNames.map(student=><li>{student}</li>)
          }
        </ul>
        {
        products.map(pd=><Product item={pd}></Product>)
        }
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
      <h3>{props.item.name}</h3>
      <h5>{props.item.name}</h5>
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
