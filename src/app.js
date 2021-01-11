import express from "express";
import morgan from "morgan";
import pkg from "../package.json";

const app = express();

//Settings
app.set("port", process.env.PORT || 4000);
app.set("pkg", pkg);

//Middleware
app.use(morgan("dev"));

app.get("/", (req,res) => {
  res.json({
    name : app.get("pkg").name,
    author : app.get("pkg").author,
    description : app.get("pkg").description,
    version : app.get("pkg").version
  });
});
export default app;