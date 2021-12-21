function MathChallenge(num){

    
    let moedas = [1, 5, 7, 9, 11];
    let resultados = [];

    while(moedas.length != 0){
        let i = moedas.length-1;
        let qnt = 0;
        let numero = num;
    
        while(numero != 0){
            
            qnt = qnt + Math.floor(numero/moedas[i]);
            
            numero = numero % moedas[i];
    
            i--;
        }
        resultados.push(qnt);
        moedas.pop();
    }
    menor = function(array){
       return Math.min.apply(Math, array);
    }
   return menor(resultados);

}

let num = 32;
console.log(`Valor: ${num}`);
console.log(`Quantidades de moedas: ${MathChallenge(num)}`);