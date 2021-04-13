import React, { Component } from 'react';
import './form-cadastro.css';

class FormularioCadastro extends Component {
	constructor(props) {
		super(props);
		this.titulo = '';
		this.texto = '';
	}

	_handleMudancaTitulo = (event) => {
		event.stopPropagation();
		this.titulo = event.target.value;
	}

	_handleMudancaTexto = (event) => {
		event.stopPropagation();
		this.texto = event.target.value;
	}

	_criarNota = (event) => {
		event.preventDefault();
		event.stopPropagation();
		this.props.criarNota(this.titulo, this.texto);
	}

	render() {
		return (
			<form 
				className="form-cadastro"
				onSubmit={this._criarNota}
			>
				<input
					type="text"
					placeholder="Título"
					className="form-cadastro_input"
					onChange={this._handleMudancaTitulo}
				/>
				<textarea
					rows={15}
					placeholder="Escreva sua nota..."
					className="form-cadastro_input"
					onChange={this._handleMudancaTexto}
				/>
				<button className="form-cadastro_input form-cadastro_submit">
					Criar Nota
				</button>
			</form>
		);
	}
}

export default FormularioCadastro;
