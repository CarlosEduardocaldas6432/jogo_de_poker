import styles from '../css/Botoes.module.css'



export default function Botoes({fold,call}){

    return (
        <div className={styles.div_botoes}>
            <button onClick={fold} className={styles.fold}>Fold</button>
            <button onClick={call} className={styles.check_call}>Call</button>
            <button className={styles.bet}>Bet</button>
        

        </div>
    )
}