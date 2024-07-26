

//atenção: quando for fazer o nome de perfil limita a quatidade de 9 caracter para não sair do perfil 
import { useState } from 'react';

import Janela_aposta from './components/Janela_aposta.jsx'
import Tela_inicial from './components/Tela_inicial.jsx'
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
import Baralho from './Baralho.js'
import pontuacao from './modules/pontuacao.js'


let cartas

let carta_mao_1 ={};
let carta_mao_2 ={};
let carta_puxada_1 ={};
let carta_puxada_2 ={};
let carta_puxada_3 ={};
let carta_puxada_4 ={};
let carta_puxada_5 ={};


function gerarCardAleatorio() {
  let num_aleatorio = Math.floor(Math.random() * 52);
  const card = Baralho[num_aleatorio];

  return card
}

function gerar_cards_para_jogo(){

  carta_mao_1 =gerarCardAleatorio();
  carta_mao_2 =gerarCardAleatorio();
}


  // depois fazer esse usuario no login 
  const usuario = {id:"",nome:""}

  //gerar um id aleadorio
  usuario.id = crypto.randomUUID()

//conversando com o backend


let websocket 
  
websocket = new WebSocket("ws://localhost:8080")


// o onopen serve para executar uma função depois de conecta
websocket.onopen = () => {
  websocket.send("estou enviando essa messagem do frontent, passando pelo backend e voltando")
}

//onmessage serve para escuta a messagem que o servidor vai manda
websocket.onmessage = ({data}) =>{

  //data é o valor da messagem
  

    console.log(data);
    try {
       
      
      carta_puxada_1 =JSON.parse(data)[0];
      carta_puxada_2 =JSON.parse(data)[1];
      carta_puxada_3 =JSON.parse(data)[2];
      carta_puxada_4 =JSON.parse(data)[3];
      carta_puxada_5 =JSON.parse(data)[4];
      

  } catch (e) {
      console.log("esse erro so acontece por que nao sei fazer condiciona para json")
  }


}





function App() {
  /*   setTimeout(() => {   },1000);*/ 

  const [cards_principal_aparecendo, setcards_principal_aparecendo] = useState(false);
  
  const [iniciar_jogo, setiniciar_jogo] = useState(false);
  const [desistiu_da_mao, setdesistiu_da_mao] = useState(false);

  const [cards_do_jogo_um, setcards_do_jogo_um] = useState(false);
  const [cards_do_jogo_dois, setcards_do_jogo_dois] = useState(false);
  const [cards_do_jogo_tres, setcards_do_jogo_tres] = useState(false);
  const [cards_do_jogo_quatro, setcards_do_jogo_quatro] = useState(false);
  const [cards_do_jogo_cinco, setcards_do_jogo_cinco] = useState(false);


  const jogo_de_poker_comecou = () => {

    gerar_cards_para_jogo();
    console.log(carta_puxada_1,carta_puxada_2,carta_puxada_3,carta_puxada_4,carta_puxada_5)
    setiniciar_jogo(true);
    setTimeout(() => { 
      setcards_principal_aparecendo(true);
      setTimeout(() => { 
        setcards_do_jogo_um(true);
        setTimeout(() => { 
          setcards_do_jogo_dois(true);
          setTimeout(() => { 
            setcards_do_jogo_tres(true);
            setTimeout(() => { 
              setcards_do_jogo_quatro(true);
              setTimeout(() => { 
                setcards_do_jogo_cinco(true);
              console.log(pontuacao(carta_mao_1,carta_mao_2,carta_puxada_1,carta_puxada_2,carta_puxada_3,carta_puxada_4,carta_puxada_5))  
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 4000);
    

  }






  const desistir_da_mao = () => {

    setdesistiu_da_mao(true);
  }



  /*    <Perfil_jogadores_direita />
        <Perfil_jogadores_esquerda />
        <Perfil_jogadores_direita />    
        <Perfil_jogadores_esquerda />*/

  return (
  <>

    <div className='FullScreenImage'>

      <img src={fundo} alt="" />

      <div className='corpo_da_mesa'>
        <img className='mesa_de_poker' src={mesaPoker} alt="" />

      </div>
      

      <div className='game_interaction'>
       
       
       
        
      </div>
      <Pot_apostas />
      <Botoes fold={desistir_da_mao}   />
      <Croupier />
      <Cards_puxados 
      card_um={cards_do_jogo_um} card_dois={cards_do_jogo_dois} card_tres={cards_do_jogo_tres}
      card_quatro={cards_do_jogo_quatro} card_cinco={cards_do_jogo_cinco} 
      carta_puxada_1={carta_puxada_1}
      carta_puxada_2={carta_puxada_2}
      carta_puxada_3={carta_puxada_3}
      carta_puxada_4={carta_puxada_4}
      carta_puxada_5={carta_puxada_5}
      />

      {cards_principal_aparecendo && <Cards_principal desistiu={desistiu_da_mao} carta_mao_1={carta_mao_1} carta_mao_2={carta_mao_2} />}
      
      <Perfil_principal />
      <Janela_aposta />
      < Tela_inicial inicio={iniciar_jogo}  funcao_pra_comecar_jogo={jogo_de_poker_comecou} />

      

    </div>
  
  </>
  )
}

export default App
