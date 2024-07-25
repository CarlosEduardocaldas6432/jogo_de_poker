/* eslint-disable */

import styles from '../css/Tela_inicial.module.css'


export default function Tela_inicial({inicio,funcao_pra_comecar_jogo}){

    return (
        
        <div className={ inicio ? styles.jogo_comecou:styles.div_inicial}>
            
            <h1 className={styles.text_inicial} >Aguardando Jogadores: 0/1</h1>
            {!inicio && (
         <button onClick={funcao_pra_comecar_jogo} className={styles.button_inicial}>Pronto</button>
      )}
           


       
        

        </div>
    )
}