//Treinando o .map()

// let numero = [1,2,3,4]
// let numeros = numero.map( e => e**2)//elevando ao quadrado
// console.log(numeros)

const carros = [
    {
      name: 'Fusca',
      color: 'White',
      motor: 'V3 Turbo',
      price: 1400,
    },
    {
        name: 'Mustang',
        color: 'White',
        motor: 'V2 Turbo',
        price: 6000,
    },
    {
        name: 'Combi',
        color: 'White',
        motor: 'V1 Turbo',
        price: 2000
    },
    {
        name: 'Camaro',
        color: 'White',
        motor: 'V2 Turbo',
        price: 5000
    },
    {
        name: 'Palio',
        color: 'White',
        motor: 'V2 Turbo',
        price: 1600
    }
]

console.log(carros.map(e => e.price = e.price + 500))

console.log(carros.filter(e => e.price < 2000))