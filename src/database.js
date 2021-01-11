import mongoose from "mongoose";

mongoose.connect("mongodb+srv://edaga:daga2020@cluster0.qxixk.mongodb.net/pascodatabase?retryWrites=true&w=majority", {
  useNewUrlParser : true,
  useUnifiedTopology : true,
  useCreateIndex : true
}).then(db => console.log("Database is connected"))
  .catch(error => console.error(error));