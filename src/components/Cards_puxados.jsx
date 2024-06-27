
import styles from '../css/Cards_puxados.module.css'
import card from "/Cards/D9.png";
import card2 from "/Cards/C10.png";
import card3 from "/Cards/C3.png";

export default function Cards_puxados () {

   return( <div className={styles.div_Cards}>

     

      <img className={styles.card_direita} src={card} alt="" />
      <img className={styles.card_direita} src={card2} alt="" />
      <img className={styles.card_direita} src={card3} alt="" />
      <img className={styles.card_direita} src={card} alt="" />
      <img className={styles.card_direita} src={card3} alt="" />
    
    </div>
   )
}