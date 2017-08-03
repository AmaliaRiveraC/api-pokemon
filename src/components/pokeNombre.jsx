import React, { Component } from 'react';

export default class NombrePokemon extends Component {
	render(){
		return(
			<div>{this.props.nombre}</div>
		);
	}
}