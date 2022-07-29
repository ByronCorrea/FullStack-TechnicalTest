const { Brand } = require("../db");

const getBrands = async (_req, res, next) => {
  try {
    let brands = await Brand.findAll();
    if (!brands) {
      res.status(404).send("No brands found");
    } else {
      res.json(brands).status(200);
    }
  } catch (error) {
    next(error);
  }
};

const getBrandById = async (req, res, next) => {
  const { id } = req.params;
  if (!id) return res.status(400).send("Id is required");
  try {
    let brand = await Brand.findByPk(id);
    if (!brand) {
      res.status(404).send("Brand not found");
    } else {
      res.json(brand).status(200);
    }
  } catch (error) {
    next(error);
  }
};

const postBrand = async (req, res, next) => {
  const { name, logo_url } = req.body;
  if (!name) return res.status(400).send("Name is required");
  try {
    let brand = await Brand.findOrCreate({
      where: {
        name,
        logo_url,
      },
    });
    if (!brand) {
      res.status(404).send("Brand not created");
    } else {
      res.json(brand).status(200);
    }
  } catch (error) {
    next(error);
  }
};

const putBrand = async (req, res, next) => {
  const { id } = req.params;
  const { name, logo_url } = req.body;
  if (!id) return res.status(400).send("Id is required");
  try {
    let brand = await Brand.findByPk(id);
    if (!brand) {
      res.status(404).send("Brand not found");
    } else {
      brand = await brand.update({
        name,
        logo_url,
      });
      res.json(brand).status(200);
    }
  } catch (error) {
    next(error);
  }
};

const deleteBrand = async (req, res, next) => {
  const { id } = req.params;
  if (!id) return res.status(400).send("Id is required");
  try {
    let brand = await Brand.findByPk(id);
    if (!brand) {
      res.status(404).send("Brand not found");
    } else {
      brand = await brand.destroy();
      res.json(brand).status(200);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getBrands,
  getBrandById,
  postBrand,
  putBrand,
  deleteBrand,
};
