const fs = require("fs");
const { resolve } = require("path");

class Producto {
  constructor(productos) {
    this.productos = productos;
  }

  addProducto(nombre, desc, codigo, ph, price, stock) {
    let producto = new Object();
    let laP = this.leerArchivo();
    //console.log(this.productos[this.productos.length - 1]);
    if (laP == null || laP == []) {
      producto["id"] = 1;
      producto["timestamp"] = Date.now();
      producto["nombre"] = nombre;
      producto["descripcion"] = desc;
      producto["codigo"] = codigo;
      producto["foto"] = ph;
      producto["precio"] = price;
      producto["stock"] = stock;
      this.productos.push(producto);
    } else {
      producto["id"] = laP[laP.length - 1].id + 1;
      producto["timestamp"] = Date.now();
      producto["nombre"] = nombre;
      producto["descripcion"] = desc;
      producto["codigo"] = codigo;
      producto["foto"] = ph;
      producto["precio"] = price;
      producto["stock"] = stock;
      this.productos.push(producto);
    }

    this.productos.push(producto);
  }

  getById(numero) {
    //return this.productos[numero - 1];
    for (let i = 0; i < this.productos.length - 1; i++) {
      if (this.productos[i].id == numero) {
        return i;
      }
    }
    return "carrito no encontrado";
  }

  getAll() {
    return this.productos;
  }

  deleteById(numero) {
    this.productos.pop[numero - 1];
    return this.productos;
  }

  deleteAll() {
    this.productos = [];
  }

  //Función para crear ruta o archivo
  crearArchivo = async () => {
    try {
      await fs.promises.appendFile("productos.txt", "");
      console.log("archivo creado con exito!");
    } catch (error) {
      console.log("Hubo un error al crear archivo!!");
    }
  };

  leerArchivo() {
    try {
      const data = fs.readFileSync("./productos.txt");
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
    const arrProductos = this.getAll();
    try {
      await fs.promises.writeFile(
        "./productos.txt",
        JSON.stringify(productos, null, 2)
      );
    } catch (error) {
      console.log("ERROR AL AGREGAR!!");
    }
  };
}

p = new Producto([]);

/* p.addProducto(
  "Polera de Bob Esponja",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  234858534,
  "https://media.giphy.com/media/AL10PPC3eZhxC/giphy.gif",
  123.45,
  3
);
p.addProducto(
  "Polera de Bart Simpson",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  2344534,
  "https://media.giphy.com/media/26tPplGWjN0xLybiU/giphy.gif",
  234.56,
  2
);
p.addProducto(
  "Polera de Pluto",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  2344534,
  "https://media.giphy.com/media/SI6rTjsXIYJOM/giphy.gif",
  345.67,
  8
); */

//let productos = p.getAll();
//p.crearArchivo();
//p.saveProd(productos);

module.exports = Producto;
