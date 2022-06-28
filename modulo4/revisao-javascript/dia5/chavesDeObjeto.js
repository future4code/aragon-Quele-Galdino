function inputValidade (input) {
    const answer = {
        isError: false, errors: []
    }
    const chaves = Object.keys(input)
    for(let element of chaves){
        if(input[element] === undefined)
        answer.isError = true
        answer.errors.push(element)
    }
    return answer
}        
console.log (inputValidade({id:1, nome: undefined}))
console.log (inputValidade({id:1, nome: "quele"}))
console.log (inputValidade({id:1, nome: undefined, email: undefined}))
            