
import styles from '../css/Cards_jogadores_esquerda.module.css'
import card from "../imgs/card-back2.png";

export default function Cards_jogadores_esquerda () {

   return( <div className={styles.div_Cards}>

        <img className={styles.card_esquerda} src={card} alt="" />
        <img className={styles.card_direita} src={card} alt="" />
    
    </div>
   )
}