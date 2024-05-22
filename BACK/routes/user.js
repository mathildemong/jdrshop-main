<<<<<<< HEAD
const express = require("express");
const {
  subscribe,
  getUser,
  login,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/user");
const router = express.Router();

router.route("/adduser").post(subscribe);
router.route("/login").post(login);
router.route("/user/:id").get(getUser);
router.route("/users").get(getAllUsers);
router.route("/user/:id").put(updateUser);
router.route("/user/:id").delete(deleteUser);

=======
const express = require("express");
const {
  subscribe,
  getUser,
  login,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/user");
const router = express.Router();

router.route("/adduser").post(subscribe);
router.route("/login").post(login);
router.route("/user/:id").get(getUser);
router.route("/users").get(getAllUsers);
router.route("/user/:id").put(updateUser);
router.route("/user/:id").delete(deleteUser);

>>>>>>> e87d2061a4521c03d4dd8d318fd8fb257754b307
module.exports = router;