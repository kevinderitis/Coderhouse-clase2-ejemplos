class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }

    static variableEstatica = 0

    saludar(){
        console.log(`Hola soy ${this.nombre}`)
    }
    correr(){
        console.log('Estoy corriendo')
    }
    sumarEstatica(){
        Persona.variableEstatica++;
    }
}

let persona1 = new Persona('Carlitos', 'Gonzalez')
let persona2 = new Persona('Maria', 'Perez')
persona1.sumarEstatica()
persona2.sumarEstatica()
console.log(Persona.variableEstatica)
// console.log(persona1)