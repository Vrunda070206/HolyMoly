import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// 📌 GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// 📌 ADD new product — for Admin dashboard
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json({ success: true, product: newProduct });
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
});

export default router;
