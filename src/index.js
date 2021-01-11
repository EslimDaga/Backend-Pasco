import app from "./app";

app.listen(app.get("port"));
console.log("Server listen on Port",app.get("port"));