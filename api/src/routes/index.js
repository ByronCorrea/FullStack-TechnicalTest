const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const products = require("./products.js");
const brands = require("./brands");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", products);
router.use("/brands", brands);

module.exports = router;