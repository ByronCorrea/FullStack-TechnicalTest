const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const products = require("./products");
const brands = require("./brands");
const customers = require("./customers");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", products);
router.use("/brands", brands);
router.use("/customers", customers);

module.exports = router;
