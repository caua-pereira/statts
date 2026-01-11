/**
 * 1. Média Aritmética
 * Definição: Soma de todos os valores dividida pela quantidade de valores.
 */

import { error } from "node:console";

const verificaArrayVazio = (vetor: number[], operacao: string) => {
    if (vetor.length === 0) 
        throw new Error(`O cálculo da ${operacao} não está definido para conjuntos de dados vazios.`);    
}


export function mediaAritmetica(valores: number[]): number {
    verificaArrayVazio(valores, "média aritmetica" );
    const somaDosValores: number = valores.reduce((acumulador, elemento) => {return acumulador + elemento}, 0);
    return somaDosValores/valores.length;
}

/**
 * 2. Média Ponderada
 * Definição: Cada valor é multiplicado por um peso, somando-se esses produtos e dividindo pela soma dos pesos.
 */

export function mediaPonderada(valores: number[], pesos: number[]): number {
    verificaArrayVazio(valores, "média ponderada");

    if(valores.length !== pesos.length) {
        throw new Error('A quatidade de pesos deve ser igual a quantidade de valores do conjunto.');
    }

    const numerador: number = valores.reduce((acumulador, elemento, indice) => {return acumulador + elemento * pesos[indice]}, 0);
    const denominador: number = pesos.reduce((acumulador, elemento) => {return acumulador + elemento}, 0);

    if(Math.abs(denominador) < Number.EPSILON) { // como EPSILON é o menor número possível entre 1 e o próximo número, daí: "se for muito, muito próximo de zero"
        throw new Error('Deve haver pelo menos um peso não nulo no conjunto de dados.');
    }

    return numerador/denominador;
}

/*
 * 3. Média Geométrica
 * Definição: A n-ésima raiz do produto de todos os valores (onde n é a quantidade de valores). 
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

/*
 * 4. Média Harmônica
 * Definição: O inverso da média aritmética dos inversos dos valores.
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