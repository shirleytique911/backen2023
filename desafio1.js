class ProductManager{



    constructor(){

this.productos =[]


}

addProduct(title, description, price, thumbnail, code, stock) {

    const idProduct = this.products.length + 1;
    const codeEncontrado = this.products.find(

      (producto) => code === producto.code
   
     );
     if (codeEncontrado) {
  
      console.log("Producto con code proporcionado ya existe");
   
      return;
   
     }

    const product = {

        id: idProduct,
     
        title,
     
        description,
     
        price,
     
        thumbnail,
     
        code,
     
        stock,
     
       };

  

    if (Object.values(product).includes(undefined)) {

        console.log("Faltan datos");
     
        return this.products.push(product);
     
      }
}

getProducts() {
   
    return this.products;
  }

  productExiste(id) {
    

    return this.products.find((producto) => producto.id === id);
  }

  getProductById(id) {

    !this.productExiste(id)
      ? console.log("Not found")
      : console.log(this.productExiste(id));
  }

}


const ProductManager = new ProductManager();



ProductManager.addProduct(

 "Manzanas",

 "Rojas",

 2000,

 "m1",

 100

);

ProductManager.addProduct(

 "Bananos",

 "pequeños",

 1800,

 "B2",

 200

);


console.log(ProductManager.getProducts());

ProductManager.getProductById(4);

console.log(ProductManager.getProducts());


//ejercicio shirly