const express = require("express");
const router = express.Router();
const Driver = require("../models/driver");
const verifyToken = require("../middleware/verify-token");
const user = require("../models/user");
const Loads = require("../models/order");
const { ReadPreference } = require("mongodb");

router.get("/", async (req, res) => {
  try {
    const loads = await Loads.find();
    res.json(loads);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/:loadId", async (req, res) => {
  try {
    const load = await Loads.findById(req.params.loadId);
    res.json(load);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/:loadId", verifyToken, async (req, res) => {
  try {
    const action  = req.body;
    const driver = req.user._id;
    var load;
    if (action.stat === "accepted") {
       load = await Loads.findByIdAndUpdate(req.params.loadId, {
        orderStatus: "accepted",
        driver,
      });

    } else if (action.stat === "on the way") {
      load = await Loads.findByIdAndUpdate(req.params.loadId, {
        orderStatus: "on the way",
        driver,
      });

    } else if (action.stat === "delivered") {
      load =await Loads.findByIdAndUpdate(req.params.loadId, {
        orderStatus: "delivered",
        driver,
      });

    } else if (action.stat === "rejected") {
      load = await Loads.findByIdAndUpdate(req.params.loadId, {
        orderStatus: "rejected",
        driver,
      });


    } else {
      return res.status(400).json({ message: "Invalid action" });
    }

    res.json(load);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/my-loads/show',verifyToken, async (req, res) => {
  try {
      const loads = await Loads.find({driver:req.user._id});
      res.send(loads);
  } catch (error) {
      res.status(400).json({error});
  }
});



module.exports = router;
