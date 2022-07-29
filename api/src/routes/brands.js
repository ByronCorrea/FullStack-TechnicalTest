const { Router } = require("express");
const router = Router();
const {
  getBrands,
  getBrandById,
  postBrand,
  putBrand,
} = require("../controllers/brands");

router.get("/", getBrands);

router.get("/:id", getBrandById);

router.post("/", postBrand);

router.put("/:id", putBrand);

router.delete("/:id", deleteBrand);

module.exports = router;
