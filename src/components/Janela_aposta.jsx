import styles from '../css/Janela_aposta.module.css'



export default function Janela_aposta(){

    return (
        <div className={styles.div_janela}>
           
            <input type="number" className={styles.aposta} />
            <button className={styles.confimar_aposta}>confimar</button>
        

        </div>
    )
}