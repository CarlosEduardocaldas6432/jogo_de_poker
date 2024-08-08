
import Aposta_jogadores from './Aposta_jogadores';
import Cards_jogadores from './Cards_jogadores_esquerda';
import styles from '../css/Perfil_jogadores_esquerda.module.css'
import fundo_do_perfil from "../imgs/fundo_do_perfil_esquerda.png";
import foto_perfil from "../imgs/astronalta.png";



export default function perfil_jogadores_esqueda(jogador){

    return(
        <div className={styles.perfil_fundo}>
            
            <img className={styles.perfil_fundo_img} src={fundo_do_perfil} alt="" />
            <Cards_jogadores />
           
         
            <div className={styles.div_info}>
                <p className={styles.nome_perfil}>{jogador.usuario_nome}</p>
                <p className={styles.saldo_perfil}>{jogador.usuario_saldo}</p>
                <Aposta_jogadores />
                
               
            </div>
            <img className={styles.img_perfil} src={foto_perfil} alt="" />

           
            
            
         
        </div>

         
    )

}
