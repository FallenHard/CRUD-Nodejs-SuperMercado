const Mercado = require("../models/Mercado");

class MercadoController {
  async store(req, res) {
    const { product, category, hall, shelf } = req.body;

    if (!product) {
      return res.status(404).json({ error: "Product is required " });
    }
    if (!category) {
      return res.status(404).json({ error: "Category is required " });
    }
    if (!hall) {
      return res.status(404).json({ error: "Hall is required " });
    }
    if (!shelf) {
      return res.status(404).json({ error: "Shelf is required " });
    }

    try {
      const response = await Mercado.create({
        product,
        category,
        hall,
        shelf,
      });

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async GetAll(req, res) {
    try {
      const response = await Mercado.findAll();

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async GetOne(req, res) {
    const { product } = req.params;

    if (!product) {
      return res.status(404).json({ error: "Product is required" });
    }

    try {
      const response = await Mercado.findAll({ where: {product} });

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async Update(req, res) {
    const { product } = req.params;
    const { category, hall, shelf } = req.body;

    try {
      const response = await Mercado.update(
        {
          product,
          category,
          hall,
          shelf,
        },
        { where: { product } }
      );

      return res.json(response);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async delete(req, res) {
    const { product } = req.params;

    try {
      await Mercado.destroy({ where: { product } });

      return res.status(200).json();
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }
}

module.exports = new MercadoController();
