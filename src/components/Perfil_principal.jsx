

import styles from '../css/Perfil_principal.module.css'
import fundo_do_perfil from "../imgs/fundo_perfil_principal.png";
import foto_perfil from "../imgs/astronalta.png";
import Aposta_principal from './Aposta_principal';



export default function perfil_principal (){

    return(
        <div className={styles.perfil_fundo}>
            
            <img className={styles.perfil_fundo_img} src={fundo_do_perfil} alt="" />
          
           
         
            <div className={styles.div_info}>
                <p className={styles.nome_perfil}>Full House</p>
                <p className={styles.saldo_perfil}>10,000</p>
                <Aposta_principal />
               
            </div>
            <img className={styles.img_perfil} src={foto_perfil} alt="" />

           
            
            
         
        </div>

         
    )

}
