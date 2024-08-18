// const express = require("express");
// const router = express.Router();
// const Order = require("../models/driver");
// const verifyToken = require("../middleware/verify-token");
// const user = require("../models/user");
// const order = require("../models/order");



// router.get("/driver/orders", async (req, res) => {
//   try {
//     const orders = await Order.find(); 
//     res.json(orders); 
//   } catch (error) {
//     res.status(400).json({ message: "An error occurred" }); 
//   }
// });
// router.get("/driver/orders/:orderId", async (req, res) => {
//   try {
//     const order = await Order.findById(req.params._id);
    
// });
// const {action}= req.body;
// if (action === "accepted") {
//   await driver.save();
//   res.status(200).json("accepted");
// } else {
//   res.status(200).json("rejected");
// }
// const driver = await driver.create(req.body)
// if (action !== "accepted" && action !== "rejected") {
//   return(res.status(400).json("invalid"))




// const express = require("express");
// const router = express.Router();
// const Driver = require("../models/driver"); // Assuming this is correct
// const Order = require("../models/order"); // Corrected to refer to the Order model
// const verifyToken = require("../middleware/verify-token");
// const User = require("../models/user"); // Capitalize model names for consistency

// // GET route to fetch an order by ID
// router.get("/driver/:_id", async (req, res) => {
//   try {
//     const order = await Order.findById(req.params._id); // Corrected variable usage
//     if (!order) {
//       return res.status(404).json({ message: "Order not found" });
//     }
//     res.json(order);
//   } catch (error) {
//     res.status(400).json({ message: "An error occurred" }); // Send a generic error message
//   }
// });

// // POST route to update order status
// router.post("/driver/:_id", async (req, res) => { // Corrected typo
//   try {
//     const { action } = req.body;
//     const driver = req.user._id; // Assuming driver is identified by the token

//     if (action === "accept") {
//       await Order.findByIdAndUpdate(req.params._id, {
//         status: "accepted",
//         driver,
//       });
//     } else if (action === "reject") {
//       await Order.findByIdAndUpdate(req.params._id, {
//         status: "rejected",
//         driver,
//       });
//     } else {
//       return res.status(400).json({ message: "Invalid action" });
//     }

//     res.json({ message: "Order updated successfully" });
//   } catch (error) {
//     res.status(400).json({ message: "An error occurred" }); // Send a generic error message
//   }
// });

// module.exports = router;





// const express = require("express");
// const router = express.Router();
// const Driver = require("../models/driver"); // Assuming this is correct
// const Order = require("../models/order"); // Corrected to refer to the Order model
// const verifyToken = require("../middleware/verify-token");
// const User = require("../models/user"); // Capitalize model names for consistency

// // GET route to fetch all orders
// router.get("/driver/orders", async (req, res) => {
//   try {
//     const orders = await Order.find(); // Fetch all orders from the database
//     res.json(orders); // Send the orders as a JSON response
//   } catch (error) {
//     res.status(400).json({ message: "An error occurred" }); // Send a generic error message
//   }
// });

// module.exports = router;