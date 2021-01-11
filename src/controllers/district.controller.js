import District from "../models/District";

export const getDistrict = async(req,res) => {
  const districts = await District.find();
  res.json(districts);
}

export const getDistrictById = (req,res) => {
  res.json("Get by id district");
}

export const createDistrict = async(req,res) => {
  const { name, region, province, latitude, longitude, altitude, imagesUrl } = req.body;
  const newDistrict = new District({ name, region, province, latitude, longitude, altitude, imagesUrl });
  const districtSaved = await newDistrict.save();
  res.status(201).json(districtSaved);
}

export const updateDistrict = (req,res) => {

}

export const deleteDistrict = (req,res) => {

}