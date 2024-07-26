

const pontuacao = (carta_mao_1,carta_mao_2,carta_puxada_1,carta_puxada_2,carta_puxada_3,carta_puxada_4,carta_puxada_5) => {
    
    
    let todasCartas = [
        carta_mao_1, carta_mao_2, 
        carta_puxada_1, carta_puxada_2, 
        carta_puxada_3, carta_puxada_4, 
        carta_puxada_5
    ];
    
    // Função para contar a frequência dos valores das cartas
    function contarValores(cartas) {
        let contagem = {};
        for (let carta of cartas) {
            if (contagem[carta.valor]) {
                contagem[carta.valor]++;
            } else {
                contagem[carta.valor] = 1;
            }
        }
        return contagem;
    }
    
    // Função para verificar par, trinca e quadra
    function verificarParTrincaQuadra(contagem) {
        let par = 0, trinca = 0, quadra = 0;
        for (let valor in contagem) {
            if (contagem[valor] === 2) par++;
            if (contagem[valor] === 3) trinca++;
            if (contagem[valor] === 4) quadra++;
        }
        return { par, trinca, quadra };
    }
    
    // Função para verificar flush
    function verificarFlush(cartas) {
        let contagem = {};
        for (let carta of cartas) {
            if (contagem[carta.tipo]) {
                contagem[carta.tipo]++;
            } else {
                contagem[carta.tipo] = 1;
            }
        }
        for (let naipe in contagem) {
            if (contagem[naipe] >= 5) {
                return true;
            }
        }
        return false;
    }
    
    // Função para verificar straight
    function verificarStraight(cartas) {
        let valores = cartas.map(carta => carta.valor);
        valores = [...new Set(valores)].sort((a, b) => a - b);
    
        let contador = 1;
        for (let i = 1; i < valores.length; i++) {
            if (valores[i] === valores[i - 1] + 1) {
                contador++;
                if (contador === 5) {
                    return true;
                }
            } else {
                contador = 1;
            }
        }
        return false;
    }
    
    // Função para verificar a melhor mão
    function verificarMelhorMao(cartas) {
        let contagemValores = contarValores(cartas);
        let { par, trinca, quadra } = verificarParTrincaQuadra(contagemValores);
        let flush = verificarFlush(cartas);
        let straight = verificarStraight(cartas);
    
        if (quadra) return 'Quadra';
        if (trinca && par) return 'Full House';
        if (flush) return 'Flush';
        if (straight) return 'Straight';
        if (trinca) return 'Trinca';
        if (par === 3) return 'Três Pares';
        if (par === 2) return 'Dois Pares';
        if (par === 1) return 'Par';
        return 'Carta Alta';
    }
    
    // atenção fazer uma variavel que acumula pontos das cartas para verificar qual par,trinca etc e maior 

    let resultado = verificarMelhorMao(todasCartas);
    return resultado
    
}

export default pontuacao;