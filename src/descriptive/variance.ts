import { mediaAritmetica } from "./mean";

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
 * Calcula a variância populacional (σ²)
 * @param valores - Array de números representando toda a população
 * @returns Variância populacional
 * @throws {Error} Se o array estiver vazio
 */
export function varianciaPopulacional(valores: number[]): number {
    verificaArrayVazio(valores, "variância populacional");
    
    const soma: number = valores.reduce((acumulador, elemento) => acumulador + elemento, 0);
    const media: number = soma / valores.length;
    
    const somaQuadrados: number = valores.reduce((acumulador, elemento) => 
        acumulador + (elemento - media) ** 2, 0);
    
    return somaQuadrados / valores.length;
}

/**
 * Calcula o desvio padrão populacional (σ), raiz quadrada da variância populacional
 * @param valores - Array de números representando toda a população
 * @returns Desvio padrão populacional
 * @throws {Error} Se o array estiver vazio
 */
export function desvioPadraoPopulacional(valores: number[]): number {
    const variancia: number = varianciaPopulacional(valores);
    return Math.sqrt(variancia);
}

/**
 * Calcula a variância amostral (s²) 
 * @param valores - Array de números representando uma amostra
 * @returns Variância amostral
 * @throws {Error} Se o array estiver vazio
 */
export function varianciaAmostral(valores: number[]): number {
    verificaArrayVazio(valores, "variância amostral");
    
    const soma = valores.reduce((acumulador, elemento) => acumulador + elemento, 0);
    const media = soma / valores.length;
    
    const somaQuadrados = valores.reduce((acumulador, elemento) => {return acumulador + (elemento - media) ** 2}, 0);
    return somaQuadrados / (valores.length - 1);
}

/**
 * Calcula o desvio padrão amostral (s), raiz quadrada da variância amostral
 * @param valores - Array de números representando uma amostra
 * @returns Desvio padrão amostral
 * @throws {Error} Se o array estiver vazio
 */
export function desvioPadraoAmostral(valores: number[]): number {
    const variancia: number = varianciaAmostral(valores); 
    return Math.sqrt(variancia);
}

/**
 * Calcula a covariância entre duas variáveis, mede como duas variáveis variam juntas
 * @param valoresX - Primeiro conjunto de valores
 * @param valoresY - Segundo conjunto de valores
 * @returns Covariância entre X e Y
 * @throws {Error} Se os arrays tiverem tamanhos diferentes
 * @throws {Error} Se algum array estiver vazio
 * 
 * @example
 * // Altura (cm) e Peso (kg) de 5 pessoas
 * covariancia([170, 175, 180, 165, 190], [65, 70, 75, 60, 85]); // 87.5
 */
export function covariancia(valoresX: number[], valoresY: number[]): number {
    if (valoresX.length !== valoresY.length) {
        throw new Error("Para calcular a covariância, ambos os conjuntos devem ter o mesmo tamanho.");
    }

    const mediaX: number = mediaAritmetica(valoresX);
    const mediaY: number = mediaAritmetica(valoresY);
    const tamanhoDaAmostra: number = valoresX.length;

    const somatorio: number = valoresX.reduce((acumulador, elementoX, indice) => {
        const desvioX = elementoX - mediaX;
        const desvioY = valoresY[indice] - mediaY;
        return acumulador + (desvioX * desvioY);
    }, 0);
    
    return somatorio / tamanhoDaAmostra;
}