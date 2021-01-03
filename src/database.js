import moongose from "mongoose";

moongose.connect("mongodb+srv://eslim:<clave></clave>@cluster0.65kp7.mongodb.net/<dbname>?retryWrites=true&w=majority",{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : true,
    useCreateIndex : true
  })
  .then(db => console.log("Database is Connected"))
  .catch(error => console.log(error));