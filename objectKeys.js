const user = {
    id:1,
    name: 'Pedro',
    email: 'pedro@mail.com'
}

// const keys = ['id', 'email']
// const newUser = {}
// keys.forEach(key => {
//     newUser[key] = user[key]
// })
// console.log(newUser)


const keys = ['id', 'name']
const filterObject = (obj, keys) => {
    
    return keys
    .map(key => { return {[key]: obj[key]} })
    .reduce( (ant, atual) => { 
        return {
            ...ant,
            ...atual
        }

    }, {})
}
console.log(filterObject(user, keys));

