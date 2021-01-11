import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import disctrictRoutes from "./routes/district.routes";

const app = express();

//Settings
app.set("port", process.env.PORT || 4000);
app.set("pkg", pkg);

//Middleware
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/district",disctrictRoutes);

app.get("/", (req,res) => {
  res.json({
    name : app.get("pkg").name,
    author : app.get("pkg").author,
    description : app.get("pkg").description,
    version : app.get("pkg").version
  });
});

export default app;