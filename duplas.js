let pessoas = ['Samuel', 'Thyago', 'Tiago', 'Matheus']; // Adicione aqui as pessoas

let duplas = []
let x;

if(pessoas.length % 2 === 0){
    x = pessoas.length;
}else{
    x = pessoas.length - 1;
}

while(duplas.length != x) {

    let rand = Math.floor(Math.random()*pessoas.length);
    if(duplas.length === 0){
        duplas.push(pessoas[rand])

    }else{
        let verifica = 0;
        for (const ele of duplas) {
            if(ele === pessoas[rand]){
                verifica = 1;
            }
        }
        if(verifica === 0){
            duplas.push(pessoas[rand])
        }
    } 
}

for (let i = 0; i < duplas.length; i = i + 2) {
    console.log( duplas[i] +" e "+ duplas[i+1] );
}

