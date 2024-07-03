

//atenção: quando for fazer o nome de perfil limita a quatidade de 9 caracter para não sair do perfil 
import { useState } from 'react';
import Janela_aposta from './components/Janela_aposta.jsx'
import Pot_apostas from './components/Pot_apostas.jsx'
import Croupier from './components/Croupier.jsx'
import Botoes from './components/Botoes.jsx'
import Cards_puxados from './components/Cards_puxados.jsx'
import Cards_principal from './components/Cards_principal.jsx'
import Perfil_principal from './components/Perfil_principal.jsx'
import Perfil_jogadores_direita from './components/Perfil_jogadores_direita.jsx';
import Perfil_jogadores_esquerda from './components/Perfil_jogadores_esquerda.jsx';
import './css/App.css'
import fundo from "./imgs/fundo.png";
import mesaPoker from "./imgs/mesaPoker.png";

function App() {

  /*   setTimeout(() => {   },1000);*/ 


  const [cardsAparecendo, setCardsAparecendo] = useState(false);

  const gerarCards = () => {
    setTimeout(() => { 
      setCardsAparecendo(true);
      console.log("Aqui você pode colocar uma mensagem útil ou informativa");
    }, 5000);
  }


  const desistir_da_mao = () => {

    setCardsAparecendo(false);
  }



  return (
  <>

    <div className='FullScreenImage'>

      <img src={fundo} alt="" />

      <div className='corpo_da_mesa'>
        <img className='mesa_de_poker' src={mesaPoker} alt="" />

      </div>
      

      <div className='game_interaction'>
       
        <Perfil_jogadores_direita />
        <Perfil_jogadores_esquerda />
        <Perfil_jogadores_direita />    
        <Perfil_jogadores_esquerda />
        
      </div>
      <Pot_apostas />
      <Botoes fold={desistir_da_mao}  call={gerarCards} />
      <Croupier />
      <Cards_puxados />
      {cardsAparecendo && <Cards_principal />}
      
      <Perfil_principal />
      <Janela_aposta />

      

    </div>
  
  </>
  )
}

export default App
