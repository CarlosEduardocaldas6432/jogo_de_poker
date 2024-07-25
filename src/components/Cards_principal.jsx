
/* eslint-disable */
import styles from '../css/Cards_principal.module.css'


export default function Cards_pricipal ({desistiu,carta_mao_1,carta_mao_2}) {



    

   return( <div className={styles.div_Cards}>



   <img className={ desistiu ? styles.card_esquerda_fold:styles.card_esquerda} src={carta_mao_1.src} alt="" />
   <img className={ desistiu ? styles.card_direita_fold: styles.card_direita} src={carta_mao_2.src} alt="" />
   

     

    
    </div>
   )
}