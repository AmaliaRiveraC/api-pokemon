import React, { Component } from 'react';
import NombrePokemon from './pokeNombre.jsx';

export default class Pokemones extends Component {
	constructor(){
		super();
		this.state = {
			pokeDato: {
				moves: []
			}
		}
	}
	mostrarPokeDatos(event){
		console.log(event.target.dataset.pokeurl)
		fetch(event.target.dataset.pokeurl)
		.then((res)=>{ return res.json()})
		.then((pokeInfo) => {this.setState({pokeDato: pokeInfo})})
	}
	render(){
		let pokeArreglo = this.props.info.results.map((pokemon, indice) =>{
			return <NombrePokemon onClick={this.mostrarPokeDatos} key={indice} data-pokeurl={pokemon.url}>{pokemon.name}</NombrePokemon> 
		});
				return(
					<div>
						<div>{pokeArreglo}</div>
						<div>{this.state.pokeDato.moves}</div>
					</div>
		);
	}
}