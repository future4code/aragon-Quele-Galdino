
import './App.css';
import Botao from './components/Botao/Botao.js';
import CardPerfil from './components/CardPerfil/CardPerfil.js';
import InfoUsuario from './components/infoUsuario/InfoUsuario.js';

function App() {
  return (
    <div className="App">
      <CardPerfil
        // Abaixo, enviamos as 3 props para o componente (imagem, nome, descricao). A sintaxe é igual os atributos de HTML
        imagem="foto-astrodev.png"
        nome="Astrodev"
        descricao="Oi, eu sou o Astrodev. Sou o chefe dos alunos da Labenu."
      />
      {/* Abaixo temos um componente botão. Envie uma prop para esse botão e receba no componente, tornando o texto do botão dinâmico. */}
      <Botao texto="seguir" />
      <Botao texto="curtir" />
      {/* Apague essa               linha e invoque novamente o botão */}
      <InfoUsuario endereco="Avenida Brasil, 300" email="gigi@hot.com" link="https://www.github.com/gigi"/>
    </div>
  );
}

export default App;
