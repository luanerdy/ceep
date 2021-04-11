import "./assets/reset.css";
import "./assets/App.css";
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import { Component } from 'react';

class App extends Component {
	render() {
		return (
			<section className="conteudo">
				<FormularioCadastro />
				<ListaDeNotas />
			</section>
		);
	}
}

export default App;
