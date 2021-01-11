import { Schema, model } from "mongoose";

new Schema({
  name : String,
  region : String,
  province : String,
  latitude : Number,
  longitude : Number,
  altitude : Number,
  imageUrl : String
},{
  timestamps : true,
  versionKey : false
});

export default model("District", districtSchema);