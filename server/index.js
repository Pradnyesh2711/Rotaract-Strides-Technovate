import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// routes
import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UserRoute.js";
import MemberRoute from "./routes/MemberRoute.js";
//import EventRoute from "./routes/EventRoute.js";

const app = express();

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// to serve images inside public folder
app.use(express.static("public"));
app.use("/images", express.static("images"));

dotenv.config();
const PORT = process.env.PORT;

const CONNECTION = process.env.MONGO_URI;
mongoose
  .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Listening at Port ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/member", MemberRoute);
//app.use("/events", EventRoute);

