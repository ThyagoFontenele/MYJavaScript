const array = ["Sei que sou", "Sei o que sei", "Sou uma banana"];

const busca = 'BANANA'

let resultado = []
array.map((e, index) => {
    
    if(e.toLowerCase().includes(busca.toLowerCase())  === true){
        resultado.push(index+1);
    }

});
console.log(`"${busca.toLowerCase()}" :`, resultado);