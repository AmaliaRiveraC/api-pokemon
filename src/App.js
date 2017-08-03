import React, { Component } from 'react';
import './App.css';
import Pokemones from './components/pokemones.jsx';

class App extends Component {
  constructor(){
	  super();
	  this.state= {apiResponse: {
		  results: []
	  }}
  }
  
	
  componentDidMount(){
	  
	  fetch('http://pokeapi.co/api/v2/pokemon/')
	  .then((res) => {return res.json()})
	  .then((respuesta) => {this.setState({apiResponse:respuesta})})
	  
  }
  render() {
    return (
      <div className="App">
        <div>Hola Mundo</div>
		<Pokemones info={this.state.apiResponse} />
      </div>
    );
  }
}

export default App;
