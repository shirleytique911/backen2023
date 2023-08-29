class ProductManager{



    constructor(){

this.productos =[]


this.precioBaseDeGanancia=0

}

getProductById (){

returnthis.productos

}

addProduct(title, description, price, thumbnail, code, stock) {

    const idProduct = this.products.length + 1;
  
    const codeEncontrado = this.products.find(
  
     (producto) => code === producto.code
  
    );

    const producto = {

        id: idProduct,
     
        title,
     
        description,
     
        price,
     
        thumbnail,
     
        code,
     
        stock,
     
       };

  
    if (codeEncontrado) {
  
     console.log("Producto con code proporcionado ya existe");
  
     return;
  
    }

    if (Object.values(producto).includes(undefined)) {

        console.log("Faltan datos");
     
        return;
     
       }
     
       this.products.push(producto);
     
      }


}

codigo.push(codigo_id)

console.log("El Producto  ha sido registrado correctamente")


const ProductManager =new ProductManager()


ProductManager.addProductos("MANZANAS","2",1000,500,newDate("2023-08-22"))

ProductManager.addProductos("BANANOS","3",2000,300,newDate("2023-08-22"))

ProductManager.addProductos("SANDIA","0",4000,200,newDate("2023-08-15"))

ProductManager.addProductos("PAPAYA","4",2500,500,newDate("2023-08-15"))

ProductManager.addProductos("ALCACHOFAS","6",2000,100,newDate("2023-08-15"))





const productos=ProductManager.getEproductos()


ProductManager.addCodigo(3,"Codigo")
ProductManager.addCodigo(0,"Codigo")
ProductManager.addCodigo(4,"Codigo")
ProductManager.addCodigo(6,"Codigo")



console.log(ProductManager.getProducts());
ProductManager.getProductById(4);




//ejercicio shirly