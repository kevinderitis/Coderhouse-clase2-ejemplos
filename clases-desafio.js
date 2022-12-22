class Contador{
    constructor(nombre){
        this.responsable = nombre
        this.contador = 0
    }

    static contadorGlobal = 0
    static nombreUltimo = 999

    sumar(){
        this.contador++
        Contador.contadorGlobal++
    }

    registrarse(){
        Contador.nombreUltimo = this.responsable
    }
}

let resp = new Contador('Lionel')
let resp1 = new Contador('Angel')
let resp2 = new Contador('Horacio')
let resp3 = new Contador('Agustin')

// Sumo 1 al contador de resp 

resp.sumar()

// Sumo 1 al contador de resp1

resp1.sumar()

resp1.sumar()

resp1.sumar()

// Sumo 1 al contador de resp2

resp2.sumar()
resp2.registrarse()

// Sumo 1 al contador de resp3

resp3.sumar()
resp3.registrarse()


console.log(`${resp.responsable} tiene: ${resp.contador}`)
console.log(`${resp1.responsable}  tiene: ${resp1.contador}`)
console.log(`${resp2.responsable}  tiene: ${resp2.contador}`)
console.log(`${resp3.responsable}  tiene: ${resp3.contador}`)
console.log(`Contador global tiene: ${Contador.contadorGlobal}`)
console.log(`El ultimo registrado fue: ${Contador.nombreUltimo}`)