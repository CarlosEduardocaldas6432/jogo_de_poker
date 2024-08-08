/* eslint-disable */
import { useState } from 'react';
import styles from '../css/Tela_inicial.module.css'


export default function Tela_inicial({inicio,funcao_pra_comecar_jogo,onNomeChange,
    jogadores_online}){


    const [inputNome, setInputNome] = useState('');

    const handleInputChange = (e) => {
      setInputNome(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onNomeChange(inputNome);
      funcao_pra_comecar_jogo()
    };

    return (
        
        <div className={ inicio ? styles.jogo_comecou:styles.div_inicial}>

            
            <h1 className={styles.text_inicial} > Jogadores Online: {jogadores_online}</h1>

            
            <form className={styles.form_container} onSubmit={handleSubmit}>
                <input className={styles.input_field}
                    type="text" 
                    value={inputNome} 
                    onChange={handleInputChange} 
                    placeholder="Digite seu nome" 
                />
                <button className={styles.submit_button} type="submit">Enviar</button>
            </form>

       
        

        </div>
    )
}