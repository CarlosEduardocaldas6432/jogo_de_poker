/* eslint-disable */
import styles from '../css/Pot_apostas.module.css'
import foto from '../imgs/casino-chip_2460459.png'



export default function Pot_apostas({pot}){

    return (
        <div className={styles.div_aposta}>

        <img className={styles.img_aposta} src={foto} alt="" />
        <p className={styles.texto_aposta}>{pot}</p>
        

        </div>
    )
}