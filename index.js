const container = require("./container");
const express = require("express");
const app = express();

async function main() {
  const products = new container("./products.txt");

  let allProducts = await products.getAll();
  app.get("/productos", (req, res) => {
    res.send(allProducts);
  });

  let idSearch = Math.floor(Math.random() * 3);
  let productById = await products.getById(idSearch);
  app.get("/productoRandom", (req, res) => {
    res.send(productById);
  });

  const server = app.listen(8080, () => {
    console.log(`Server corriendo en puerto ${server.address().port}`);
  });

  server.on("error", (error) => console.log(`error en servidor ${error}`));
}

main();
