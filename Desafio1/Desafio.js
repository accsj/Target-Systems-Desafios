// Desafio 1 da Target System

/* O desafio a principio se trata de uma sequência Fibonacci, como no enunciado da questão não falava se poderia alterar ou adicionar variaveis 
trarei duas soluções Diferentes
*/

/* 1° Muitas pessoas pensariam em resolver da seguinte forma e por mais que traga o valor correto final (91), o código tem alguns erros a serem apontados,*/


const indice = 13;
let soma = 0;
let k = 0;

/* 1° Muitas pessoas pensariam em resolver da seguinte forma e por mais que traga o valor correto final (91), o código tem alguns erros a serem apontados, ela funciona de forma recursiva, ou seja, para o enunciado que apenas pede para apontar o valor final ela faz diversos cálculos para chegar no valor final e exibindo-os, Se no enunciado da questão pedisse a sequência daria para usar-lá, porém ela entrega o resultado da mesma forma. */

function Recursiva () {
    if ( k < indice) {
        k = k + 1
        soma = soma + k
        console.log(soma)
        return Recursiva()
    }
}

Recursiva();

/* 2° Esta função ela é de forma iterativa, ou seja, dentro de um loop (for) ela irá somar o valor de k com a condição que implementamos que é K <= (menor ou igual) a indice. Essa função ela vai direto ao ponto, imprimindo apenas o resultado final desejado que é (91). */

function Iterativa() {
    for ( k; k <= indice; k++) {
        soma += k;
    }
    console.log(soma);
}

Iterativa();

