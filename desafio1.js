class ProductManager{



    constructor(){

this.productos =[]


}

addProduct(title, description, price, thumbnail, code, stock) {
    if (this.products.some((producto) => producto.code == code)) {
        console.log(`El producto ${code} se repite `);
        return;
      }

    const idProduct = this.products.length + 1;
  
   
  
   

    const productNew = {

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

    if (Object.values(productNew).includes(undefined)) {

        console.log("Faltan datos");
     
        return this.products.push(productNew);
     
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






//ejercicio shirly