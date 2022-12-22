function duplicar(num){
    return function(){
        return num * 2
    }
}

let resultado = duplicar(8)()

console.log(resultado)