const { promises: fs } = require("fs");

class Container {
  constructor(route) {
    this.route = route;
  }

  async getById(id) {
    const products = await this.getAll();
    const productById = products.find((p) => p.id == id);
    return productById;
  }

  async getAll() {
    try {
      const products = await fs.readFile(this.route, "utf-8");
      return JSON.parse(products);
    } catch (error) {
      return [];
    }
  }
}

module.exports = Container;
