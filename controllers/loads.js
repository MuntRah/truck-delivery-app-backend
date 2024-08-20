const express = require("express");
const router = express.Router();
const Driver = require("../models/driver");
const verifyToken = require("../middleware/verify-token");
const user = require("../models/user");
const Loads = require("../models/order");

router.get("/", async (req, res) => {
  try {
    const loads = await Loads.find();
    res.json(loads);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/:loadId", async (req, res) => {
  try {
    const { action } = req.body;
    const driver = req.user._id;

    if (action === "accepted") {
      await Loads.findByIdAndUpdate(req.params._id, {
        status: "accepted",
        driver,
      });

    } else if (action === "on the way") {
      await Loads.findByIdAndUpdate(req.params._id, {
        orderStatus: "on the way",
        driver,
      });

    } else if (action === "delivered") {
      await Loads.findByIdAndUpdate(req.params._id, {
        orderStatus: "delivered",
        driver,
      });

    } else if (action === "rejected") {
      await Loads.findByIdAndUpdate(req.params._id, {
        orderStatus: "rejected",
        driver,
      });


    } else {
      return res.status(400).json({ message: "Invalid action" });
    }

    res.json({ message: "Load status updated successfully" });
  } catch (error) {
    res.status(400).json({ message: "" });
  }
});

router.get('/show',verifyToken, async (req, res) => {
  try {
      const loads = await Loads.find({driver:req.user._id});
      res.send(loads);
  } catch (error) {
      res.status(400).json({error});
  }
});



module.exports = router;
