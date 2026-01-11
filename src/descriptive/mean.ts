/**
 * 1. Média Aritmética
 * Definição: Soma de todos os valores dividida pela quantidade de valores.
 */

import { error } from "node:console";

export function mediaAritmetica(valores: number[]): number {
    if(valores.length === 0) {
        throw new Error('A Média Aritmética não está definida para conjutos de dados vazios');
    }

    let total: number = 0;
    total = valores.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    })

    return total/valores.length;
}

/**
 * 2. Média Ponderada
 * Definição: Cada valor é multiplicado por um peso, somando-se esses produtos e dividindo pela soma dos pesos.
 */

export function mediaPonderada(valores: number[], pesos: number[]): number {
    if(valores.length === 0) {
        throw new Error('A Média Ponderada não está definida para conjutos de dados vazios');
    }

    if(valores.length !== pesos.length) {
        throw new Error('A quatidade de pesos deve ser igual a quantidade de valores do conjunto');
    }

    let numerador: number;
    numerador = valores.reduce((acumulador, elemento, indice) => {
        return acumulador + elemento * pesos[indice];
    }, 0);

    let denominador: number = 0;
    denominador = pesos.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    });

    if(denominador === 0) {
        throw new Error('Soma dos pesos deve ser diferente de 0');
    }

    return numerador/denominador;
}

/*
 * 3. Média Geométrica
 * Definição: A n-ésima raiz do produto de todos os valores (onde n é a quantidade de valores). 
 */

export function mediaGeometrica(valores: number[]): number {
    if(valores.length === 0) {
        throw new Error('A Média Geométrica não está definida para conjuntos de dados vazios');
    }

    let produtoDosValores: number = valores.reduce((acumulador, elemento) => {
        return acumulador * elemento;
    }, 1);

    return Math.sqrt(produtoDosValores);
}

/*
 * 4. Média Harmônica
 * Definição: O inverso da média aritmética dos inversos dos valores.
 */

export function mediaHarmonica(valores: number[]): number {
    if(valores.length === 0) {
        throw new Error('A Média Harmônica não está definida para conjuntos de dados vazios');
    }

    valores.some(valor => {
        if(valor === 0) {
            throw new Error('Não pode haver valores nulos (0) na Média Harmônica');
        }
    })

    let sumElementosInversos = valores.reduce((acumulador, elemento) => {
        return acumulador + (1/elemento);
    }) 

    return valores.length/sumElementosInversos;
}