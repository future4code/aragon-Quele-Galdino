import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    inputUsuario: "",
    inputTexto: "",
    mensagens: []
  }

  componentDidMount(){
    this.pegarDados()
  }

  componentDidUpdate(){
   this.salvarDados()
  }

  handleInputUsuario = (event) => {
    this.setState({inputUsuario: event.target.value})
  }

  handleInputTexto = (event) => {
    this.setState({inputTexto: event.target.value})
  }

  salvarDados = () => {
    localStorage.setItem('inputUsuario', this.state.inputUsuario)
    localStorage.setItem('inputTexto', this.state.inputTexto)
  }

  pegarDados = () => {
    const usuario = localStorage.getItem("inputUsuario")
    const texto = localStorage.getItem("inputTexto")
    this.setState({inputUsuario: usuario, inputTexto: texto })
  
    const listaDeMensagens = JSON.parse(localStorage.getItem("listaDeMensagens"))
    this.setState({mensagens: listaDeMensagens})
  }

  enviarMensagem = () => {
    const objetoMensagem = {usuario: this.state.inputUsuario, texto: this.state.inputTexto}
    const novaLista = [...this.state.mensagens, objetoMensagem]
    const novaListaConvertida = JSON.stringify(novaLista)

    localStorage.setItem('listaDeMensagens', novaListaConvertida)

    this.setState({mensagens: novaLista})
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="usuario">Usuário:</label>
        <input 
        type="text" 
        id="usuario" 
        value={this.state.inputUsuario}
        onChange={this.handleInputUsuario}
        />

        <br/>

        <label htmlFor="texto">Texto:</label>
        <input 
          type="text" 
          id="texto" 
          value={this.state.inputTexto}
          onChange={this.handleInputTexto}
        />

        <button onClick={this.enviarMensagem}>Salvar</button>

        {this.state.mensagens.map(mensagem => {
          return <p> {mensagem.usuario}: {mensagem.texto} </p>
        })}

        {/* <button onClick={this.salvarDados}>Salvar</button>
        <button onClick={this.pegarDados}>Pegar</button> */}
      </div>
    );
  }
}

export default App;
