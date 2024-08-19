const express = require("express");
const router = express.Router();
const Order = require("../models/driver");
const verifyToken = require("../middleware/verify-token");
const user = require("../models/user");
const order = require("../models/order");

router.get("/driver/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
router.post("/driver/orders/:orderId", async (req, res) => {
  try {
    const { action } = req.body;
    const driver = req.user._id;

    if (action === "accepted") {
      await Order.findByIdAndUpdate(req.params._id, {
        status: "accepted",
        driver,
      });
    } else if (action === "rejected") {
      await Order.findByIdAndUpdate(req.params._id, {
        status: "rejected",
        driver,
      });
    } else {
      return res.status(400).json({ message: "Invalid action" });
    }

    res.json({ message: "Order updated successfully" });
  } catch (error) {
    res.status(400).json({ message: "" });
  }
});

module.exports = router;
