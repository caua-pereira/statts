import { error } from "node:console";

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
 * Calcula a média aritmética simples de um conjunto de valores númericos
 * @param valores - Array de números para cálculo da média
 * @returns A média aritmética dos valores
 * @throws {Error} Se o array estiver vazio
 */
export function mediaAritmetica(valores: number[]): number {
    verificaArrayVazio(valores, "média aritmética" );
    const somaDosValores: number = valores.reduce((acumulador, elemento) => {return acumulador + elemento}, 0);
    return somaDosValores/valores.length;
}

/**
 * Calcula a média ponderada de um conjunto de valores numéricos
 * @param valores - Array de números para cálculo 
 * @param pesos - Array de pesos correspondentes aos valores
 * @returns A média ponderada dos valores
 * @throws {Error} Se o array de valores estiver vazio
 * @throws {Error} Se os arrays tiverem tamanho diferentes
 * @throws {Error} Se a soma dos pesos for muito próxima de zero
 */
export function mediaPonderada(valores: number[], pesos: number[]): number {
    verificaArrayVazio(valores, "média ponderada");

    if(valores.length !== pesos.length) {
        throw new Error('A quantidade de pesos deve ser igual a quantidade de valores do conjunto.');
    }

    const numerador: number = valores.reduce((acumulador, elemento, indice) => {return acumulador + elemento * pesos[indice]!}, 0);
    const denominador: number = pesos.reduce((acumulador, elemento) => {return acumulador + elemento}, 0);

    if(Math.abs(denominador) < Number.EPSILON) { // como EPSILON é o menor número possível entre 1 e o próximo número, daí: "se for muito, muito próximo de zero"
        throw new Error('Deve haver pelo menos um peso não nulo no conjunto de dados.');
    }

    return numerador/denominador;
}

/** 
 * Calcula a média geométrica de um conjunto de valores positivos
 * @param valores - Array de números positivos (> 0) para cálculo
 * @returns A média geometrica dos valores
 * @throws {Error} Se o array estiver vazio
 * @throws {Error} Se houver alguma valor menor ou igual a zero 
 */
export function mediaGeometrica(valores: number[]): number {
    verificaArrayVazio(valores, "média geométrica");

    const temValorNegativo: boolean = valores.some((valor) => {return valor <= 0});
    if(temValorNegativo) {
        throw new Error('A média geométrica não está definida para conjunto de elementos menores ou iguais a zero (0).');
    }

    const produtoDosValores: number = valores.reduce((acumulador, elemento) => {return acumulador * elemento}, 1);
    return Math.pow(produtoDosValores, 1/valores.length);
}

/** 
 * Calcula a média harmônica de um conjunto de valores positivos
 * @param valores - Array de números positivos (> 0) para cálculo
 * @returns  A média harmônica dos valores
 * @throws {Error} Se o array estiver vazio
 * @throws {Error} Se algum valor for igual a zero
 * @throws {Error} Se a soma dos inversos for muito próxima de zero
 */
export function mediaHarmonica(valores: number[]): number {
    verificaArrayVazio(valores, "média harmônica");

    const temValorNulo = valores.some((valor) => {return valor === 0});
    if(temValorNulo) {
        throw new Error('A média harmônica não está definida para conjunto de valores que possuam pelo menos um valor nulo (0).')
    }

    const somaElementosInversos = valores.reduce((acumulador, elemento) => {return acumulador + (1/elemento)}, 0); 
    if (Math.abs(somaElementosInversos) < Number.EPSILON) {
        throw new Error('A soma dos inversos é muito próxima de zero.');
    }
    return valores.length/somaElementosInversos;
}