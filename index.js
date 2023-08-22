class ProductManager{

    

    constructor(productos){

this.productos =[]


this.precioBaseDeGanancia=1000

}

    getproductos(){

returnthis.productos

}

    agregarProductos(nombre,stock,precio,codigo,fecha=newDate()){

precio+=precio*1000.500

constproductos_id=this.productos.length+1

constcatalogo=[]

constproductos={

id:productos_id,

nombre,
codigo,

precio,

stock,

fecha,


}

this.productos.push(this.productos)

}

    agregarProductos(productos_id,codigo_id, ){

constproductos_encontrado=this.productos.find((productos)=>productos.id===productos_id)

if(!products_encontrado){

console.log("El producto con el ID proporcionado no existe")

return

}

constCodigo=productos_encontrado.codigo

constProductoRegistrado=codigo.includes(codigo_id)

if(productoRegistrado){

console.log("El producto ya existe en el stock")

return

}

codigo.push(codigo_id)

console.log("El Producto  ha sido registrado correctamente")

}

    agregarFechaDeCompra(productos_id,ingreso_fecha){

constproductos_encontrado=this.productos.find((productos)=>productos.id===productos_id)

if(!productos_encontrado){

console.log("El producto con el id proporcionado no existe")

return

}

constproductos_ingreso={...prodcutos_encontrado}

prodcutos_ingreso.id=this.productos.length+1

productos_ingreso.fecha=nueva_fecha

productos_ingreso.codigo=[]

this.productos.push(this.productos_ingresado)

console.log("La fecha del producto de compra ha sido ingresada correctamente")

}

}

constProductManager =newProductManager()


ProductManager.agregarProductos("MANZANAS","2",1000,500,newDate("2023-08-22"))

ProductManager.agregarProductos("BANANOS","3",2000,300,newDate("2023-08-22"))

ProductManager.agregarProductos("SANDIA","0",4000,200,newDate("2023-08-15"))

ProductManager.agregarProductos("PAPAYA","4",2500,500,newDate("2023-08-15"))

ProductManager.agregarProductos("ALCACHOFAS","6",2000,100,newDate("2023-08-15"))





constproductos=ProductManager.getEproductos()


ProductManager.agregarCodigo(3,"Codigo")
ProductManager.agregarCodigo(0,"Codigo")
ProductManager.agregarCodigo(4,"Codigo")
ProductManager.agregarCodigo(6,"Codigo")






ProductManager.agregarFechaDeCompra(0,"sandia",newDate("2024-09-10"))


constproductos=ProductManager.getproductos()

console.log("Los productos han sido actualizados",productosActualizados)





//ejercicio shirly






