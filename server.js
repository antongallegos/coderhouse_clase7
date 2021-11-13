//INICIAMOS SERVIDOR CON EXPRESS
const express = require("express");
const server = express();

//AGREGA ROUTE
const routeC = require("./routeProducto");
server.use("/api/producto", routeC);
const routeP = require("./routeCarrito");
server.use("/api/carrito", routeP);

//INDICAMOS EL PUERTO QUE ESCUCHA EXPRESS
server.listen(8080, () => {
  console.log("listen on port 8080");
});
