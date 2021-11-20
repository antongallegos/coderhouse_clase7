//IMPORTAMOS ROUTE
const { Router } = require("express");
const router = Router();

//IMPORTAR CLASE CONTENEDOR
const c = require("./Carrito");
const d = new c([]);
const carJ = new c(d.leerArchivo());
const carB = d.leerArchivo();
//IMPORTAR CLASE CONTENEDOR
const p = require("./Producto");
const pr = new p([]);
const prJ = new p(pr.leerArchivo());
const prB = pr.leerArchivo();

//DEFINIMOS LAS RUTAS
/*get*/
router.get("/", (req, res) => {
  let a = d.leerArchivo();
  res.send(a);
});
/*get by id*/
router.get("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.send({ error: "El parámetro ingresado no es un número" });
  }
  if (id < 1 || id > f.length) {
    return res.send({ error: "Producto no encontrado" });
  } else {
    d.leerArchivo();
    res.json(d.carrito[d.getById(id)]);
  }
});
/*post*/ //FALTA COMPLETAR
router.post("/", (req, res) => {
  let j = carJ.getAll();
  let carrito = Object();
  console.log(j);
  carrito.id = d.leerArchivo().length + 1;
  carJ.addCarrito(carrito);
  console.log(carJ);
  d.saveCarrito(carJ.getAll());
  res.redirect("/");
});

/*post*/ //FALTA COMPLETAR
router.post("/:id/:producto", (req, res) => {
  let idC = parseInt(req.params.id);
  let idProd = parseInt(req.params.producto);
  let dataC = carJ.getAll();
  let dataP = prJ.getAll();
  if (isNaN(idC) && isNaN(idProd)) {
    return res.send({ error: "El parámetro ingresado no es un número" });
  }
  if (idC < 1 || idC > d.leerArchivo().length) {
    return res.send({ error: "Carrito no encontrado" });
  }
  if (idProd < 1 || idProd > pr.leerArchivo().length) {
    return res.send({ error: "Producto no encontrado" });
  } else {
    if (
      carJ.carrito[idC - 1].id != null &&
      carJ.carrito[idC - 1].id == idC &&
      prJ.productos[idProd - 1].id != null &&
      prJ.productos[idProd - 1].id == idProd
    ) {
      carJ.addProducto(idC - 1, prJ.productos[idProd - 1]);
      carJ.saveCarrito(carJ.getAll());
    }
    carJ.saveCarrito(carJ.getAll());
  }
  res.redirect("/");
});

/*post*/ //FALTA COMPLETAR
router.get("/:id/producto", (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.send({ error: "El parámetro ingresado no es un número" });
  }
  if (id < 1 || id > carB.length) {
    return res.send({ error: "Producto no encontrado" });
  } else {
    d.leerArchivo();
    res.json(carJ.carrito[id - 1].productos);
  }
  res.redirect("/");
});
/*delete*/
router.delete("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.send({ error: "El parámetro ingresado no es un número" });
  }
  if (id < 1 || id > f.length) {
    return res.send({ error: "Producto no encontrado" });
  } else {
    let a = d.deleteById(id);
    d.saveProd();
    res.json(a);
  }
});

router.post("/:id/producto/:id_prod", (req, res) => {
  let idC = parseInt(req.params.id);
  let idProd = parseInt(req.params.id_prod);
  let dataC = carJ.getAll();
  let dataP = prJ.getAll();
  if (isNaN(idC) && isNaN(idProd)) {
    return res.send({ error: "El parámetro ingresado no es un número" });
  }
  if (idC < 1 || idC > carB.length) {
    return res.send({ error: "Carrito no encontrado" });
  }
  if (idProd < 1 || idProd > prB.length) {
    return res.send({ error: "Producto no encontrado" });
  } else {
    if (
      carJ.carrito[idC - 1].id != null &&
      carJ.carrito[idC - 1].id == idC &&
      prJ.productos[idProd - 1].id != null &&
      prJ.productos[idProd - 1].id == idProd
    ) {
      carJ.deleteProductById(idC, idProd);
      carJ.saveCarrito(carJ.getAll());
    }
    carJ.saveCarrito(carJ.getAll());
  }
  res.redirect("/");
});

module.exports = router;
