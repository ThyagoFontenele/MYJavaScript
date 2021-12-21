// const pessoa = {
//     nome: 'Thyago',
//     idade: 20,
//     altura: 1.80,
//     peso: 75,
//     bolosFavoritos: ['Morango', 'Chocolate'],
//     endereco: {
//         rua: 'Dos bobos',
//         numero: 20
//     },
//     imc(){
//         const calculo = (pessoa.peso / pessoa.altura**2).toFixed(2)
//         return `Seu imc é ${calculo} ${pessoa.nome}`
//     }
// }

// const pessoa2 = pessoa
// pessoa2.nome = 'João'
// console.log(pessoa2, pessoa)
function criaPaciente(nome, peso, altura){

    return {
        nome: nome,
        peso: peso,
        altura: altura,
        imc(){
            const calculo = (peso / altura**2).toFixed(2)
            return `Seu imc: ${calculo} ${nome}`
        }
    }
}

const paciente1 = criaPaciente('Thyago', 75, 1.81)
console.log(paciente1.imc())
const paciente2 = criaPaciente('Thyago', 75, 1.81)
const paciente3 = criaPaciente('Thyago', 75, 1.81)