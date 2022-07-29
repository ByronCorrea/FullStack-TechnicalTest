const { Products, Brand } = require("../db");

const getProducts = async (_req, res, next) => {
  try {
    let products = await Products.findAll();
    if (!products) {
      res.status(404).send("No products found");
    } else {
      res.json(products).status(200);
    }
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    let product = await Products.findByPk(id);
    if (!product) {
      res.status(404).send("Product not found");
    } else {
      res.json(product).status(200);
    }
  } catch (error) {
    next(error);
  }
};

const postProduct = async (req, res, next) => {
  const { name, description, img_url, price, brand } = req.body;
  try {
    let product = await Products.create({
      name,
      description,
      img_url,
      price,
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
    res.json(product).status(200);
  } catch (error) {
    next(error);
  }
};

const putProduct = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, img_url, price, brand } = req.body;
  try {
    let product = await Products.findByPk(id);
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
      res.json(product).status(200);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    let product = await Products.findByPk(id);
    if (product) {
      product.destroy();
      res.status(200).send("Product deleted");
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
};
