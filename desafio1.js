class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1; 
   
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
     
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Faltan datos");
        return;
      }
  
      // Validacion que el campo "code" no se repita
      if (this.products.some((product) => product.code === code)) {
        console.log("Producto con código proporcionado ya existe");
        return;
      }
  
     // ID autoincrementable
      const newProduct = {
        id: this.productIdCounter++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      // Agregar el producto al arreglo
      this.products.push(newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  }
  
  // Ejemplo de uso:
  const productManager = new ProductManager();
  
  productManager.addProduct("Manzanas", "Rojas", 2000, "m1", "apple123", 100);
  productManager.addProduct("Bananos", "Pequeños", 1800, "B2", "banana456", 200);
  
  console.log(productManager.getProducts());
  
  const productIdToFind = 1; // ID del producto que deseas buscar
  const foundProduct = productManager.getById(productIdToFind);
  
  if (foundProduct) {
    console.log("Producto encontrado:", foundProduct);
  } else {
    console.log("Producto no encontrado.");
  }
  
  
   //? Consulta por # id de producto.
   getById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      console.log(`No se encontró un producto con el ID ${id}`);
      return null; // Puedes devolver null o un mensaje de error según tus necesidades
    }
    return product;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //ejercicio shirley tique 1 entrega