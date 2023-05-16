import express from "express";
import cors from "cors";
import { Application } from "express";

const app: Application = express();
import UserRoute from "./app/modules/user/user.route";

// middleware
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// user route
app.use("/api/v1/user", UserRoute);

export default app;
