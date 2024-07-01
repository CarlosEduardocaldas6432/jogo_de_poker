
import styles from '../css/Cards_principal.module.css'
import card from "/Cards/D9.png"
import card2 from "/Cards/C10.png"

export default function Cards_pricipal () {

   return( <div className={styles.div_Cards}>

     
      <img className={styles.card_esquerda} src={card} alt="" />
      
      <img className={styles.card_direita} src={card2} alt="" />
    
    </div>
   )
}