const fs = require("fs");
const { resolve } = require("path");

class Carrito {
  constructor(carrito) {
    this.carrito = carrito;
  }

  addCarrito(producto) {
    this.carrito.push(producto);
  }

  getById(numero) {
    return this.carrito[numero - 1];
  }

  getAll() {
    return this.carrito;
  }

  deleteById(numero) {
    this.carrito.pop[numero - 1];
    return this.carrito;
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

  saveProd = async (productos) => {
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

p = new Carrito();

/* p.addProducto(
      "Escuadra",
      123.45,
      "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
    );
    p.addProducto(
      "Calculadora",
      234.56,
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
    );
    p.addProducto(
      "Globo Terráqueo",
      345.67,
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
    ); */

//let productos = p.getAll();
//p.crearArchivo();
//p.saveProd(productos);

module.exports = Carrito;
