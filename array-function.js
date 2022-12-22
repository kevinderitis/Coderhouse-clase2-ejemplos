const mostrarLista = lista => {
    let longitud = lista.length
    if( longitud > 0){
        lista.forEach(element => {
            console.log(element)
        });
    } else{
        console.log('Lista vacía')
    }
    console.log(`La cantidad de elementos en la lista es: ${longitud}`)
    return longitud
}

let array1 = []
let array2 = [1, 2, 3, 'cuatro', 5, 'veinte']
let array3 = ['aslfasl', 'asfasfaa', 222022]

let resultado = mostrarLista(array2)


