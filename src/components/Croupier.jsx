
import styles from '../css/Croupier.module.css'
import foto_croupier from "../imgs/croupier.png";


export default function Croupier(){

    return (
        <div className={styles.div_croupier}>
            <img className={styles.img_croupier} src={foto_croupier} alt="" />

        </div>
    )
}