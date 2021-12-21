function haveUpperCase(str) {

    const letters = 'abcdefghijklmnopqrstuvxwyz';
    let verif = 0;
    for (let i = 0; i < str.length; i++) {
        let contador = 0;
        
        const ele = str[i];
        for (const iterator of letters) {
            if(ele === iterator.toUpperCase()){
                contador++;
            }
        }
        if(contador > 0){
            verif++;
        }
    }
    if(verif >= 1){
        return true;
    }
    return false;
}

function haveNumber(str) {

    const numbers = '0123456789';

    for (let i = 0; i < str.length; i++) {
        let contador = 0;
        const ele = str[i];
        for (const iterator of numbers) {
            if(ele === iterator ){
                contador++;
            }
        }
        if(contador > 0){
            return true;
        }
    }
    return false;
}

function haveSimbols(str) {

    const all = 'abcdefghijklmnopqrstuvxwyz0123456789';
    let verif = 0;
    for (let i = 0; i < str.length; i++) {
        let contador = 0;
        const ele = str[i];
        for (const iterator of all) {
            if(ele === iterator || ele === iterator.toUpperCase() ){
                contador++;
            }
        }
        if(contador === 0){
            verif++;
        }
    }
    if(verif >= 1){
        return true;
    }
    return false;
}

function havePassword(str) {
    const pass = 'password';
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        
        const ele = str[i];
        const elePass = pass[contador];

        if(ele === elePass || ele === elePass.toUpperCase() ){
            contador++;
        }else{
            contador = 0;
        }
        
        if(contador === 8){
            return true;
        }
    }
    
    return false;
}

function stringChallenge(str){

    let caracters = false;
    if(str.length >= 7 && str.length < 31){
        caracters = true;
    }
    if(haveUpperCase(str) === true && haveNumber(str) === true && haveSimbols(str) === true && caracters === true && havePassword(str) === false){
        
        return true;
    }
    return false;
}

const string = '!!!!!!+++++++++AMAMAM9';
console.log(stringChallenge(string));