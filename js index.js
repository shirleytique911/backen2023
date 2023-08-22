// const nombre  ="back"
// const apellido =""

// const resultado ="la suma de ${a} y {} es ${a+b}"

//clases sintaxis sencilla y orientada a objetos para creario y definir comportamiento

class NombreDeClass{

    constructor(parametros ){
        //codigo de iniciacion
    }

    //let this method
    metodo1(){
        //codigo de metodo 1
    }

    //test this method
    metodo2(){

    }
}

//ejemplo

class Persona{
 constructor(nombre,edad){
    this.nombre = nombre
    this.edad = edad
 }
    saludar() {
        console.log(`hola, mi nombre es ${this.nombre},tengo${ this.edad} años.`)
    }
}
    let persona1 =new Persona("jose", 30)
    let persona2 = new Persona("katia",20)

    persona1.saludar()
    persona2.saludar()
 


    function mostraLista(lista){
        if(lista.length>0){
            lista .forEach(element => {
                console.log(element)
                
            });
        }
    }
let datosPrueba =[]
mostraLista(datosPrueba)


//test this function

class Contador {
 static cuentaGlobal =0

 constructor( responsable){
    this.responsable =responsable
    this.cuentaIndividual =0

 }
 //test this method
 obtenerResponsable(){
    return this.responsable
 }

 //test this method
 obtenerCuentaIndividual(){
    return this.cuentaIndividual
 }

 static obtenerCuentaGlobal(){
    return Contador.cuentaGlobal
 }

 Contador(){
    this.cuentaIndividual++
    Contador.cuentaGlobal++
 }
}

const contador1 =new Contador ("persona 1")
const contador2 = new Contador("persona 2")

console.log(contador1.obtenerResponsable())
console.log(contador1.obtenerCuentaIndividual())

console.log(contador2.obtenerResponsable())
console.log(contador2.obtenerCuentaIndividual())

contador1.contar()
contador2.contar()
