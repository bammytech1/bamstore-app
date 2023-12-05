const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  reviewProduct,
  deleteReview,
  updateReview,
} = require("../controllers/productController");

router.post("/createProduct", protect, admin, createProduct);
router.get("/products", getProducts);
router.get("/:id", getProduct);
router.delete("/:id", protect, admin, deleteProduct);
router.patch("/:id", protect, admin, updateProduct);

router.patch("/review/:id", protect, reviewProduct);
router.patch("/deleteReview/:id", protect, deleteReview);
router.patch("/updateReview/:id", protect, updateReview);

module.exports = router;
