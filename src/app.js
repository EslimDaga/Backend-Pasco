import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import { createRoles } from "./libs/initialSetup";
import ProductsRoute from "./routes/Products.routes";
import AuthRoute from "./routes/Auth.routes";
import UserRoute from "./routes/User.Routes";

const app = express();
createRoles();

app.set("pkg", pkg);

app.use(express.json());
app.use(morgan("dev"));

app.get("/",(req,res) => {
  res.json({
    name : app.get("pkg").name,
    author : app.get("pkg").author,
    description : app.get("pkg").description,
    version : app.get("pkg").version
  });
});

app.use("/api/products", ProductsRoute);
app.use("/api/auth", AuthRoute);
app.use("/api/users", UserRoute);

export default app;