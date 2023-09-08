



class ProductManager {
    constructor (){
        this.path ="./productos.shirley";
    }


    static id = 0;

    addProducto =async (title,price,img, code,stock) =>{
        let ProductNew = {
            title,
            price,
            img,
            code,
            stock
            
            
        };


        console.log ("Producto nuevo" + ProductNew)
        console.log (ProductNew)

        await shirley.writeFile(this.path,"Bienvenidos a mi entrega # 2");
    };
}
const ProductManager =new ProductManager()


ProductManager.addProductos("MANZANAS","2",1000,500,newDate("2023-08-22"))

ProductManager.addProductos("BANANOS","3",2000,300,newDate("2023-08-22"))













// //ejercicio shirly