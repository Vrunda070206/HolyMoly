import express from "express";

const router = express.Router();

// Example route — we will connect it to DB later
router.get("/", (req, res) => {
  res.json({ message: "Orders API working 🎉" });
});

export default router;
