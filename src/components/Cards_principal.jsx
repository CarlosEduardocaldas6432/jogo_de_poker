
import styles from '../css/Cards_principal.module.css'


export default function Cards_pricipal () {


   function getRandomCardPath() {
      const suits = ['S', 'H', 'C', 'D']; // S: Spades, H: Hearts, C: Clubs, D: Diamonds
      const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      
      // Cria uma lista de todos os caminhos possíveis
      const cardPaths = [];
      for (let suit of suits) {
        for (let value of values) {
          cardPaths.push(`/Cards/${suit}${value}.png`);
        }
      }
      
      // Seleciona um caminho aleatório
      const randomIndex = Math.floor(Math.random() * cardPaths.length);
      return cardPaths[randomIndex];
    }
    
  
    

   return( <div className={styles.div_Cards}>



   <img className={styles.card_esquerda} src={getRandomCardPath()} alt="" />
   <img className={styles.card_direita} src={getRandomCardPath()} alt="" />
   

     

    
    </div>
   )
}