const express = require("express");

const cervezasRouter = require("./cervezasRouter.js");
const app = express();
const path = require("path");
const staticRoute = path.join(__dirname, "..", "curso-inaem-proyecto1", "code");
app.use((req, res, next) => {
  // operaciones del middleware
  const now = new Date().toString();
  let log = `${now} ${req.method} ${req.url}`;
  console.log(log);

  next(); // para ir al siguiente middleware o a la ruta
});
app.use("/static", express.static(staticRoute));

app.use("/cervezas", cervezasRouter);

app.get("/", function (req, res) {
  res.send("Hola de nuevo");
});
app.get("/bancos", function (req, res) {
  res.send("aqui deberían aparecer los bancos");
});
app.get("/contactar", function (req, res) {
  res.send("Página para contactar con nosotros");
});

app.listen(3000);
// ../curso-inaem-proyecto1/code/
// para cada recurso de la API (alumnos, preofesores, etc) se cirven de forma separada.
// necesitamos enrutadores de Express
// enrutamos en la página principal: app.use("/cervezas", cervezasRouter);
