//IMPORTAMOS ROUTE
const { Router } = require("express");
const router = Router();

//IMPORTAR CLASE CONTENEDOR
const c = require("./Carrito");
const d = new c([]);
const f = d.leerArchivo();
//IMPORTAR CLASE CONTENEDOR
const p = require("./Producto");
const pr = new p();
const pro = pr.leerArchivo();

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
    res.json(d.getById(id));
  }
});
/*post*/ //FALTA COMPLETAR
router.post("/", (req, res) => {
  let j = d.leerArchivo();
  let carrito = Object();
  carrito.id = j.length + 1;
  console.log(j.length);
  console.log(carrito);
  d.addCarrito(carrito);
  d.saveCarrito(d.getAll());
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

module.exports = router;
