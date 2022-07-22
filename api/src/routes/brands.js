const { Router } = require("express");
const { Brand } = require("../db.js");
const router = Router();

router.get("/", async (req, res, next) => {
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
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    let brand = await Brand.findByPk(id);
    res.json({
      id: brand.id,
      name: brand.name,
      logo_url: brand.logo_url,
    });
    if (!brand) {
      res.status(404).send("Brand not found");
    } else {
      res.status(200);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { name, logo_url } = req.body;
  try {
    let brand = await Brand.findOrCreate({
      where: {
        name,
        logo_url,
      },
    });
    res.json({
      id: brand.id,
      name: brand.name,
      logo_url: brand.logo_url,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { name, logo_url } = req.body;
  try {
    let brand = await Brand.findByPk(id);
    if (!brand) {
      res.status(404).send("Brand not found");
    } else {
      brand.update({
        name,
        logo_url,
      });
      res.json({
        id: brand.id,
        logo_url: brand.logo_url,
      });
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    let brand = await Brand.findByPk(id);
    if (!brand) {
      res.status(404).send("Brand not found");
    } else {
      brand.destroy();
      res.status(200).send("Brand deleted");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
