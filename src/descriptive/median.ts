
/**
 * Valida se um array de números não está vazio
 * @param vetor - Array de números a ser verificado
 * @param operacao - Nome da operação para mensagem de erro personalizada
 * @throws {Error} Se o array estiver vazio
 */
const verificaArrayVazio = (vetor: number[], operacao: string) => {
    if (vetor.length === 0) 
        throw new Error(`O cálculo da ${operacao} não está definido para conjuntos de dados vazios.`);    
}

/**
 * 
 */
const ordenaArrayCrescente = (vetor: number[]): number[] => { // retorna um novo array sem modificar o original
    return [...vetor].sort((a, b) => a - b);
}

/**
 * 
 */
export function mediana(valores: number[]): number {
    verificaArrayVazio(valores, "mediana");
    const valoresOrdenados: number[] = ordenaArrayCrescente(valores);

    const meio: number = Math.floor(valoresOrdenados.length);
    if(valores.length % 2 === 0) {
        return (valoresOrdenados[meio - 1]! + valoresOrdenados[meio]!) / 2
    } else {
        return valoresOrdenados[meio]!;
    }
}

/**
 * 
 */
export function quantil(valores: number[], quantil_: number): number {
    if(quantil_ < 0 || quantil_ > 1) {
        throw new Error('valor do quantil é inválido para a operação, o valor deve estar no intervalo [0 , 1]');
    }

    verificaArrayVazio(valores, "posicão do quantil");
    const valoresOrdenados: number[] = ordenaArrayCrescente(valores);
    const posicao: number = quantil_ * (valores.length - 1);

    const indiceBase = Math.floor(posicao);
    const resto = posicao - indiceBase;

    if (valoresOrdenados[indiceBase + 1] === undefined) {
        return valoresOrdenados[indiceBase]!;
    }
    return valoresOrdenados[indiceBase]! + resto * (valoresOrdenados[indiceBase + 1]! - valoresOrdenados[indiceBase]!);
}

/**
 * 
 */
export function quartis(valores: number[]): [number, number, number] {
    return [quantil(valores, 0.25), quantil(valores, 0.5), quantil(valores, 0.75)];
}

/**
 * Calcula a Amplitude Interquartílica (IQR)
 * Útil para detectar Outliers 
 */
export const calcularIQR = (valores: number[]): number => {
    const valoresQuartis = quartis(valores);
    return valoresQuartis[2] - valoresQuartis[0];
};