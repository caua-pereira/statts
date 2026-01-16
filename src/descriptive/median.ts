
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
 * Ordena o array 
 * @param vetor - Array de números a ser ordenado 
 * @returns - Array com valores ordenados
 */
const ordenaArrayCrescente = (vetor: number[]): number[] => { // retorna um novo array sem modificar o original
    return [...vetor].sort((a, b) => a - b);
}

/**
 * Calcula a mediana de um conjunto de valores
 * @param valores - Array com os valores para o cálculo
 * @returns A mediana calculada
 * @throws {Error} Se o array estiver vazio
 */
export function mediana(valores: number[]): number {
    verificaArrayVazio(valores, "mediana");
    const valoresOrdenados: number[] = ordenaArrayCrescente(valores);

    const meio: number = Math.floor(valoresOrdenados.length);
    if(valores.length % 2 === 0) {
        return (valoresOrdenados[meio - 1] + valoresOrdenados[meio]) / 2
    } else {
        return valoresOrdenados[meio];
    }
}

/**
 * Calcula um quantil específico para um array de valores numéricos. 
 * @param valores - Array de valores numéricos para calcular o quantil
 * @param quantil_ - Valor do quantil desejado, entre 0 e 1 (inclusive)
 * @returns O valor do quantil calculado
 * @throws {Error} Se o quantil não estiver no intervalo [0, 1] ou se o array estiver vazio
 * @throws {Error} Se o array estiver vazio
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
        return valoresOrdenados[indiceBase];
    }
    return valoresOrdenados[indiceBase] + resto * (valoresOrdenados[indiceBase + 1] - valoresOrdenados[indiceBase]);
}

/**
 * Calcula os três quartis de um conjunto de valores numéricos.
 * @param valores - Array de valores numéricos para calcular os quartis
 * @returns Array com os três quartis: [Q1, Q2, Q3]
 * @throws {Error} Se o array estiver vazio
 * @throws {Error} Se houver erro no cálculo dos quantis
 */
export function quartis(valores: number[]): [number, number, number] {
    return [quantil(valores, 0.25), quantil(valores, 0.5), quantil(valores, 0.75)];
}

/**
 * Calcula a Amplitude Interquartílica (IQR - Interquartile Range).
 * @param valores - Array de valores numéricos para calcular o IQR
 * @returns O valor da amplitude interquartílica (Q3 - Q1)
 * @throws {Error} Se o array estiver vazio
 * @throws {Error} Se houver erro no cálculo dos quantis
 */
export const calcularIQR = (valores: number[]): number => {
    const valoresQuartis = quartis(valores);
    return valoresQuartis[2] - valoresQuartis[0];
};