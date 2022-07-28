const { Router } = require("express");
const { Product, Brand } = require("../db.js");
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    let products = await Product.findAll();
    if (!products) {
      res.status(404).send("No products found");
    } else {
      res.json(products);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    let product = await Product.findByPk(id);
    res.json({
      id: product.id,
      name: product.name,
      description: product.description,
      img_url: product.img_url,
      price: product.price,
      brand: product.brand,
    });
    if (!product) {
      res.status(404).send("Product not found");
    } else {
      res.status(200);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { name, description, img_url, price, brand } = req.body;
  try {
    let product = await Product.create({
      name: name,
      img_url: img_url,
      price: price,
      description: description,
    });

    if (brand) {
      try {
        let marca = await Brand.findOrCreate({
          where: { name: brand },
        });
        product.setBrand(marca[0]);
      } catch (error) {
        next(error);
      }
    }

    res.json({
      id: product.id,
      name: product.name,
      img_url: product.img_url,
      price: product.price,
      description: product.description,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { name, description, img_url, price, brand } = req.body;
  try {
    let product = await Product.findByPk(id);
    if (product) {
      product.update({
        name: name,
        description: description,
        img_url: img_url,
        price: price,
      });
      if (brand) {
        try {
          let marca = await Brand.findOrCreate({
            where: { name: brand },
          });
          product.setBrand(marca[0]);
        } catch (error) {
          next(error);
        }
      }
      res.json({
        id: product.id,
        name: product.name,
        description: product.description,
        img_url: product.img_url,
        price: product.price,
      });
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    let product = await Product.findByPk(id);
    if (product) {
      product.destroy();
      res.status(204).send("Product deleted");
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
