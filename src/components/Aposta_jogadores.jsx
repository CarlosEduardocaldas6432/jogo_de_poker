import styles from '../css/Aposta_jogadores.module.css'
import foto from '../imgs/casino-chip_2460459.png'



export default function Aposta_jogadores(){

    return (
        <div className={styles.div_aposta}>

        <img className={styles.img_aposta} src={foto} alt="" />
        <p className={styles.texto_aposta}>1k</p>
        

        </div>
    )
}