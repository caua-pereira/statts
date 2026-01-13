
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
const ordenaArrayCrescenteReferencia = (vetor: number[]): void => { // retorna o array original modificado
    vetor.sort((a, b) => a - b);
}

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