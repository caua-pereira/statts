# 📊 Statts - Biblioteca Estatística

**Fundamental statistical library written in TypeScript.**

`statts` é uma biblioteca de estatística fundamental feita do zero com TypeScript. Este projeto foi criado com o objetivo de aprofundar o domínio da linguagem, explorar boas práticas de engenharia de software e compreender melhor os fundamentos da Ciência de Dados por meio da estatística.

O foco da biblioteca é **entender o que acontece “debaixo do capô”**, priorizando implementações claras e simples.

---

## Objetivo do Projeto

- Implementar conceitos estatísticos fundamentais do zero.
- Conectar teoria matemática com código limpo e legível.
- Explorar o uso de tipagem forte e design de APIs em TypeScript.
- Servir como projeto de aprendizado.

---

## Estrutura

```bash
statjs/
├── src/
│   ├── descriptive/
│   │   ├── mean.ts
│   │   ├── median.ts
│   │   ├── variance.ts
│   │   └── stdDeviation.ts
│   │
│   ├── probability/
│   │   ├── normal.ts
│   │   ├── binomial.ts
│   │   └── poisson.ts
│   │
│   ├── regression/
│   │   ├── linearRegression.ts
│   │   └── correlation.ts
│   │
│   ├── linalg/
│   │   ├── vector.ts
│   │   └── matrix.ts
│   │
│   └── index.ts
│
├── tests/
├── docs/
├── README.md
└── package.json
```

---

## Módulos
* **Estatística Descritiva:** Média, Mediana, Variância, Desvio Padrão.
* **Probabilidade:** Distribuição Normal, Distribuição Binomial, Distribuição de Poisson.
* **Regressão:** Regressão linear simples, Correlação de Pearson, Coeficiente de determinação (R²).
* **Álgebra Linear (básica):** Vetores, Matrizes.

---

## Instalação

```bash
npm install statts
```

---

## Filosofia do projeto
Esta biblioteca não tem como objetivo substituir ferramentas como NumPy, pandas ou SciPy.  
O foco está em: entender fundamentos estatísticos, implementar algoritmos matemáticos manualmente, escrever código limpo, legível e documentado.

---

## Licença
MIT

