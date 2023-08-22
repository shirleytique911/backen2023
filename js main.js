class ProductManager{

    constructor(){

this.products=[]

this.precioBaseDeGanancia=0

}

    getProducts(){

returnthis.products

}

    agregarProducts(nombre,precio,codigo=60,stock=130){

precio+=precio*0.15

constproducts_id=this.products.length+1

constcatalogo=[]

constproducts={

id:products_id,

nombre,
codigo,

precio,

stock,


}

this.products.push(this.products)

}

    agregarProducts(products_id,stock_id){

constproducts_encontrado=this.products.find((products)=>products.id===products_id)

if(!products_encontrado){

console.log("El producto con el ID proporcionado no existe")

return

}

constStock=products_encontrado.stock

constusuarioRegistrado=participantes.includes(usuario_id)

if(usuarioRegistrado){

console.log("El usuario ya esta registrado en el evento")

return

}

participantes.push(usuario_id)

console.log("El usuario ha sido registrado correctamente")

}

    ponerEventoEnGira(evento_id,nueva_localidad,nueva_fecha){

constevento_encontrado=this.eventos.find((evento)=>evento.id===evento_id)

if(!evento_encontrado){

console.log("El evento con el id proporcionado no existe")

return

}

constevento_copiado={...evento_encontrado}

evento_copiado.id=this.eventos.length+1

evento_copiado.lugar=nueva_localidad

evento_copiado.fecha=nueva_fecha

evento_copiado.participantes=[]

this.eventos.push(evento_copiado)

console.log("El evento ha sido puesto en gira correctamente")

}

}

constticketManager=newTicketManager()

_//Agregar eventos_

ticketManager.agregarEvento("Concierto de Rock","Estadio River",1000,2000,newDate("2023-09-15"))

ticketManager.agregarEvento("Concierto de Pop","Movistar Arena",2000,3000,newDate("2023-10-15"))

_//Obtener eventos_

consteventos=ticketManager.getEventos()

_//Agregar usuarios_

ticketManager.agregarUsuario(1,"Usuario1")

ticketManager.agregarUsuario(1,"Usuario2")

ticketManager.agregarUsuario(2,"Usuario3")

_//Poner evento en gira_

ticketManager.ponerEventoEnGira(1,"Nuevo Lugar",newDate("2024-02-22"))

_//Obtener los eventos despues de poner en gira_

consteventosActualizados=ticketManager.getEventos()

console.log("eventos actualizados",eventosActualizados)





//ejercicio shirly






