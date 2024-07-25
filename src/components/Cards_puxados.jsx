
/* eslint-disable */

import styles from '../css/Cards_puxados.module.css'



export default function Cards_puxados ({card_um,card_dois,card_tres,card_quatro,card_cinco,carta_puxada_1,carta_puxada_2,carta_puxada_3,carta_puxada_4,carta_puxada_5}) {


   return( <div className={styles.div_Cards}>

     
      {card_um && 
      <img className={styles.card_direita} src={carta_puxada_1.src} alt="" />}
      {card_dois && 
      <img className={styles.card_direita} src={carta_puxada_2.src} alt="" />}
      {card_tres && 
      <img className={styles.card_direita} src={carta_puxada_3.src} alt="" />}
      {card_quatro && 
      <img className={styles.card_direita} src={carta_puxada_4.src} alt="" />}
      {card_cinco && 
      <img className={styles.card_direita} src={carta_puxada_5.src} alt="" />}

      

    
    </div>
   )
}