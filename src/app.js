import express from "express";
import morgan from "morgan";
import pkg from "../package.json";

import { createRoles } from "./libs/initialSetup";

import disctrictRoutes from "./routes/district.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

const app = express();
createRoles();

//Settings
app.set("port", process.env.PORT || 4000);
app.set("pkg", pkg);

//Middleware
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/district",disctrictRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);

app.get("/", (req,res) => {
  res.json({
    name : app.get("pkg").name,
    author : app.get("pkg").author,
    description : app.get("pkg").description,
    version : app.get("pkg").version
  });
});

export default app;