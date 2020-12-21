import moongose from "mongoose";

moongose.connect("mongodb://localhost/pasco-db",{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : true
  })
  .then(db => console.log("Database is Connected"))
  .catch(error => console.log(error));