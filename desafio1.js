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

 //? Consulta por # id de producto.

getProductById = async (id) => {
  let answerGetId = await this.readProducts();
  if (!answerGetId.find((product) => product.id === id)) {
    console.error("Not found");
  } else {
    console.log(answerGetId.find((product) => product.id === id));
    console.log("Producto consultado con id: " + id)
  }
};


//ejercicio shirley tique 1 entrega