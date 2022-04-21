const express = require("express");

const cervezasRouter = require("./cervezasRouter.js");
const app = express();
const path = require("path");
require("./db.js");
const staticRoute = path.join(__dirname, "..", "curso-inaem-proyecto1", "code");
const bodyParser = require("body-parser");

// OPERACIONES DEL MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  const now = new Date().toString();
  let log = `${now} ${req.method} ${req.url}`;
  console.log(log);

  next(); // para ir al siguiente middleware o a la ruta
});
app.use("/static", express.static(staticRoute));

app.use("/api/cervezas", cervezasRouter);

app.get("/", function (req, res) {
  res.send("Hola de nuevo");
});
app.get("/bancos", function (req, res) {
  res.send("aqui deberían aparecer los bancos");
});
app.get("/contactar", function (req, res) {
  res.send("Página para contactar con nosotros");
});

app.listen(3000, function () {
  console.log(`Server running on port 3000`);
});
const miCerveza = new Cerveza({
  nombre: "Ambar",
  descripción: "La cerveza de nuestra tierra",
  graduación: "4,8º",
  envase: "Botella de 75cl",
  precio: "3€",
});
miCerveza.save((err, miCerveza) => {
  if (err) return console.error(err);
  console.log(`Guardada en bbdd ${miCerveza.nombre}`);
});
// ../curso-inaem-proyecto1/code/
// para cada recurso de la API (alumnos, preofesores, etc) se sirven de forma separada.
// necesitamos enrutadores de Express
// enrutamos en la página principal: app.use("/cervezas", cervezasRouter);
