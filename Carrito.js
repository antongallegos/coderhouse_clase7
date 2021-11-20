const fs = require("fs");
const { resolve } = require("path");

class Carrito {
  constructor(carrito) {
    this.carrito = carrito;
  }

  addCarrito(carrito) {
    this.carrito.push(carrito);
  }

  addProducto(numero, product) {
    let t = [];
    t = this.carrito[numero]["productos"];
    this.carrito[numero]["productos"] = [];
    t.push(product);
    this.carrito[numero]["productos"] = t;
  }

  getById(numero) {
    //return this.carrito[numero - 1];
    for (let i = 0; i < this.carrito.length - 1; i++) {
      console.log(this.carrito[i]);
      if (this.carrito[i].id == numero) {
        return i;
      }
    }
    return "carrito no encontrado";
  }

  getAll() {
    return this.carrito;
  }

  deleteById(numero) {
    this.carrito.pop[numero - 1];
    /* for (let i = 0; i < this.carrito.length - 1; i++) {
      if (this.carrito[i].id == numero) {
        return this.carrito;
      }
    } */
    return this.carrito;
  }

  deleteProductById(numeroC, numeroP) {
    for (let i = 0; i < this.carrito.length - 1; i++) {
      if (this.carrito[i].id == numeroC) {
        for (let e = 0; i < this.carrito[i].productos.length - 1; i++) {
          if (this.carrito[i].productos[e].id == numeroP) {
            this.carrito[i].pop(productos[e]);
          }
        }
        return this.carrito;
      }
    }
  }

  deleteAll() {
    this.carrito = [];
  }

  //Función para crear ruta o archivo
  crearArchivo = async () => {
    try {
      await fs.promises.appendFile("carrito.txt", "");
      console.log("archivo creado con exito!");
    } catch (error) {
      console.log("Hubo un error al crear archivo!!");
    }
  };

  leerArchivo() {
    try {
      const data = fs.readFileSync("./carrito.txt");
      this.productos = JSON.parse(data);
      return JSON.parse(data);
    } catch (err) {
      console.error(err);
    }
  }

  /* 
      leerArchivo = async () => {
        await fs.promises
          .readFile("./coderhouse_clase2/productos.txt")
          .then((contenido) => {
            //resolve(console.log(contenido));
            console.log(JSON.parse(contenido));
          })
          .catch((err) => {
            console.log("Hubo un error al leer archivo!!", err);
          });
      }; */

  /* 
      //CONSIDERAR ESTE CODIGO COMO ASYNC
      leerArchivo = async () => {
        try {
          const contenido = await fs.promises.readFile(
            "./coderhouse_clase2/productos.txt"
          );
          this.productos = await JSON.parse(contenido);
          console.log(this.productos);
        } catch (error) {
          console.log("Hubo un error al leer el archivo!!!");
        }
      }; */

  /*   leerArchivo = async () => {
        try {
          let contenido = await fs.promises.readFile(
            "./coderhouse_clase2/productos.txt"
          );
          this.productos = contenido;
          return this.productos;
        } catch (error) {
          console.log("Hubo un error al leer archivo!!", error);
        }
      }; */

  saveCarrito = async (productos) => {
    const arrCarrito = this.getAll();
    try {
      await fs.promises.writeFile(
        "./carrito.txt",
        JSON.stringify(productos, null, 2)
      );
    } catch (error) {
      console.log("ERROR AL AGREGAR!!");
    }
  };
}

p = new Carrito([]);

module.exports = Carrito;
