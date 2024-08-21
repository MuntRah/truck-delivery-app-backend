const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
// routers
const usersRouter = require("./controllers/users");
const profilesRouter = require("./controllers/profiles");
const orderRouter = require("./controllers/order");
const customerRouter = require("./controllers/customer");
const loadsRouter = require("./controllers/loads");
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// Routes go here
app.use("/users", usersRouter);
app.use("/profiles", profilesRouter);
app.use("/orders", orderRouter);
app.use("/customer", customerRouter);
app.use("/loads", loadsRouter);

app.listen(process.env.PORT, () => {
  console.log("The express app is ready!");
});
