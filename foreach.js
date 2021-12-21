function buscarPorPreco(precoMinimo, precoMaximo){

    carros.forEach(e => {
        if(e.price >= precoMinimo && e.price <= precoMaximo){
            console.log(e)
        }
    })
}

function buscarPorNome(nome){

    carros.forEach(e => {
        if(e.name === nome || e.name.toLowerCase() === nome){
           console.log(e)
        }
    })
}

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

console.log(carros.forEach(e => console.log(e.name)));