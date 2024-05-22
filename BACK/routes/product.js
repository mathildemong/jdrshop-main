<<<<<<< HEAD
const express = require("express");
const {
  addProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");
const router = express.Router();

router.route("/product").post(addProduct);
router.route("/product").get(getAllProducts);
router.route("/product/:id").get(getProduct);
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);

=======
const express = require("express");
const {
  addProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");
const router = express.Router();

router.route("/product").post(addProduct);
router.route("/product").get(getAllProducts);
router.route("/product/:id").get(getProduct);
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);

>>>>>>> e87d2061a4521c03d4dd8d318fd8fb257754b307
module.exports = router;