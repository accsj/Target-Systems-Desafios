/* A lógica por trás é o seguinte, ao ter 3 lampadas, 3 interruptores e só poder ir até a sala 2 vezes os passos seriam os seguintes: 
1°: Ligar um dos interruptores por um tempo ir na saala verificar e depois desligar.
2°: Após desligar o primeiro interruptor deverá ligar um segundo interruptor.
3°: Ao ligar o segundo interruptor, deverá ir na sala pela segunda vez vez.
4°: A lâmpada que estiver acesa vai corresponder ao interruptor ao interruptor que você ligou recentemente,
a lâmpada que estiver apagada mas quente vai corresponder ao primeiro interruptor que você ligou, e a lâmpada apagada e fria vai corresponder ao interruptor que você nunca ligou
*/



function Find() {
    let l1 = false; // lâmpada 1
    let l2 = false; // lâmpada 2
    let l3 = false; // lâmpada 3

    // Os interruptores são os sinais de negação " ! "
    // A primeira ida à sala

    l1 = !l1; // Ligar o interruptor 1

    // A segunda ida à sala

    l1 = !l1; // Desligar o interruptor 1
    l2 = !l2; // Ligar/desligar o interruptor 2

    console.log("O interruptor 1 controla a lâmpada:", l1 ? "ligada" : "apagada");
    console.log("O interruptor 2 controla a lâmpada:", l2 ? "ligada" : "apagada");
    console.log("O interruptor 3 controla a lâmpada:", l3 ? "ligada" : "apagada");
}

Find();