//IMPORTAMOS ROUTE
const { Router } = require("express");
const router = Router();

//IMPORTAR CLASE CONTENEDOR
const c = require("./Carrito");
const d = new c();
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
  d.leerArchivo();
  let title = req.body.title;
  let price = req.body.price;
  let th = req.body.th;
  d.addProducto(title, price, th);
  d.saveProd(d.getAll());
  res.redirect("/productos");
});
/*put*/ //modificar a que busque el producto id y modifique los datos
router.put("/:id/:title/:price/:th", (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.send({ error: "El parámetro ingresado no es un número" });
  }
  if (id < 1 || id > f.length) {
    return res.send({ error: "Producto no encontrado" });
  } else {
    let title = req.params.title;
    let price = req.params.price;
    let th = req.params.th;
    let a = d.productos[id].addProducto(title, price, th);
    d.saveProd(a);
    res.json(a);
  }
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
