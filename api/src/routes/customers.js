const { Router } = require("express");
const router = Router();
const {
  getCustomers,
  postCustomer,
  putCustomer,
} = require("../controllers/customers");

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

router.get("/", [auth, admin], getCustomers);

router.post("/", postCustomer);

router.put("/:id", auth, putCustomer);

module.exports = router;
