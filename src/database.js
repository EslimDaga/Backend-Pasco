import mongoose from "mongoose";

mongoose.connect("mongodb+srv://edaga:daga2020@cluster0.qxixk.mongodb.net/<dbname>?retryWrites=true&w=majority", {
  useNewUrlParser : true,
  useUnifiedTopology : true
})
  .then(db => console.log("Database is connected"))
  .catch(error => console.error(error));