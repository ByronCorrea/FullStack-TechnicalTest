const { Router } = require("express");
const router = Router();
const {
  getProducts,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
} = require("../controllers/products");

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post("/", postProduct);

router.put("/:id", putProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
