import "./assets/reset.css";
import "./assets/App.css";
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import { Component } from 'react';

class App extends Component {
	constructor() {
		super();
		this.state = {
			notas:[]
		};
	}

	criarNota = (titulo, texto) => {
		const novaNota = {titulo, texto};
		const novoArrayNotas = [...this.state.notas, novaNota];
		const novoEstado = {
			notas: novoArrayNotas
		}
		this.setState(novoEstado);
	}

	render() {
		return (
			<section className="conteudo">
				<FormularioCadastro criarNota={this.criarNota} />
				<ListaDeNotas notas={this.state.notas} />
			</section>
		);
	}
}

export default App;
