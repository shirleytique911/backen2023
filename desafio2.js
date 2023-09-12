

const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.path = filePath;
    this.products = [];
    this.productIdCounter = 1;
  }

  initialize() {
    try {
      const data = fs.readFileSync(this.path, 'utf8');
      this.products = JSON.parse(data);
      if (Array.isArray(this.products)) {
        const maxId = Math.max(...this.products.map((product) => product.id), 0);
        this.productIdCounter = maxId + 1;
      }
    } catch (error) {
      console.error('Error de inicialización ProductManager:', error.message);
    }
  }

  saveToFile() {
    try {
      fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2), 'utf8');
    } catch (error) {
      console.error('Error al guardar datos en el archivo:', error.message);
    }
  }

  addProduct(productData) {
    const { title, description, price, thumbnail, code, stock } = productData;
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log('Faltan datos');
      return;
    }

    const newProduct = {
      id: this.productIdCounter++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(newProduct);
    this.saveToFile();
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    return product || null;
  }

  updateProduct(id, updatedProductData) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      
      updatedProductData.id = id;
      this.products[index] = updatedProductData;
      this.saveToFile();
      return true;
    }
    return false; 
  }

  deleteProduct(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.saveToFile();
      return true; 
    }
    return false; 
  }
}

const productManager = new ProductManager('products.json');
productManager.initialize();

// Ejemplo de uso:
productManager.addProduct({
  title: 'Manzanas',
  description: 'Rojas',
  price: 2000,
  thumbnail: 'm1',
  code: 'apple123',
  stock: 100,
});

const foundProduct = productManager.getProductById(1);
if (foundProduct) {
  console.log('Producto encontrado:', foundProduct);
} else {
  console.log('Producto no encontrado.');
}

// Ejemplo de actualización:
if (productManager.updateProduct(1, { title: 'Manzanas Verdes' })) {
  console.log('Producto actualizado.');
}

// Ejemplo de eliminación:
if (productManager.deleteProduct(1)) {
  console.log('Producto eliminado.');
}

